package app.sctp.security;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import app.sctp.Jwt.JwtEntryPoint;
import app.sctp.Jwt.JwtRequestFilter;



@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired
	UserDetailsService userDetailsService;
	
	@Autowired
	UserDetailsServiceImpl userdetails;
	
	
	@Autowired
	JwtRequestFilter JwtRequestFilter;
	
	@Autowired
	JwtEntryPoint JwtAuthenticationEntryPoint;
	
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
	    return super.authenticationManagerBean();
	}
	
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	
	@Bean
	public DaoAuthenticationProvider  authenticationProvider() {
		DaoAuthenticationProvider authPrivide=new DaoAuthenticationProvider();
		try {
			authPrivide.setPasswordEncoder(passwordEncoder());
			authPrivide.setUserDetailsService(userDetailsService());
		}catch (Exception e) {
			System.out.println("error"+e.getMessage());
		}
		return authPrivide;
	}
	
	@Override
	public void configure(AuthenticationManagerBuilder auth) {
		try {
			auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	
	@Override
	public void configure(HttpSecurity http) {
		try {
			http.cors().and().csrf().disable()
			.authorizeRequests().antMatchers("/auth/**").permitAll()
			.anyRequest().authenticated().and().exceptionHandling().authenticationEntryPoint(JwtAuthenticationEntryPoint).and().sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
			 http.addFilterBefore(JwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
	    CorsConfiguration configuration = new CorsConfiguration();
	    configuration.setAllowedOrigins(Arrays.asList("*"));
	    configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
	    configuration.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization"));

	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    source.registerCorsConfiguration("/**", configuration);

	    return source;
	}
	
	
}
