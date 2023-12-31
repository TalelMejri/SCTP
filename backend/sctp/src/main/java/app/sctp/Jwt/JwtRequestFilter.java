package app.sctp.Jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import app.sctp.security.UserDetailsServiceImpl;
import io.jsonwebtoken.ExpiredJwtException;


@Service
public class JwtRequestFilter extends OncePerRequestFilter {

	
	@Autowired
	jwtUtil jwtutil;
	
	@Autowired
	UserDetailsServiceImpl UserDetailsServiceImpl;
	
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		 String requestHeader=request.getHeader("Authorization");
		 String username = null;
	       String jwtToken = null;
	       if(requestHeader!=null && requestHeader.startsWith("bearer")) {
	       	jwtToken=requestHeader.substring(7);
	       	try {
	       		username=jwtutil.getUsernameFromToken(jwtToken);
	       		
	       	  } catch (IllegalArgumentException e) {
		                System.out.println("Unable to get JWT Token");
		            } catch (ExpiredJwtException e) {
		                System.out.println("JWT Token has expired");
		            }
	       	
	       }else {
	       	 logger.warn("JWT Token does not begin with Bearer String");
	       }
	       
	       if(username!=null  && SecurityContextHolder.getContext().getAuthentication()==null) {
	       	UserDetails userdet=UserDetailsServiceImpl.loadUserByUsername(username);
	       	if(jwtutil.validateToken(jwtToken, userdet)) {
	       		UsernamePasswordAuthenticationToken UsernamePasswordAuthenticationToken=new UsernamePasswordAuthenticationToken(userdet,null,userdet.getAuthorities());
	       		 SecurityContextHolder.getContext().setAuthentication(UsernamePasswordAuthenticationToken);
	       	}
	       }
	    	    filterChain.doFilter(request, response);
	}
		
	}
