package app.sctp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import InfoData.Credentials;
import app.sctp.Jwt.jwtUtil;
import app.sctp.dao.UserRepository;
import app.sctp.entity.User;
import app.sctp.security.SecurityConfig;
import app.sctp.security.UserDetailsServiceImpl;
import net.minidev.json.JSONObject;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
  
	
	@Autowired
	SecurityConfig securityConfig;
	
	@Autowired
	UserRepository UserRepo;
	
	@Autowired
	UserDetailsServiceImpl user_det_impl;
	
	@Autowired
	jwtUtil jwtTokenUtil;

	@Autowired
	AuthenticationManager authenticationManager; 
	@PostMapping("SignUp")
	public ResponseEntity<?> signUp(@RequestBody User user){
		if(UserRepo.getUserByemail(user.getEmail())!=null) {
			return new ResponseEntity<String>("Email already Used",HttpStatus.CONFLICT);
		}
		
		User user_new=new User();
		user_new.setEmail(user.getEmail());
		user_new.setRole("Client");
		user_new.setNom(user.getNom());
		user_new.setPrenom(user.getPrenom());
		user_new.setNum_tlf(user.getNum_tlf());
		user_new.setSex(user.getSex());
		user_new.setPassword(securityConfig.passwordEncoder().encode(user.getPassword()));
		UserRepo.save(user_new);
		return ResponseEntity.ok().body("userAdded");
	}
	
	@PostMapping("/login")
	public ResponseEntity<?>  login(@RequestBody Credentials info){
		JSONObject res=new JSONObject();
		try {
				if(UserRepo.getUserByemail(info.getEmail())==null) {
					 return new ResponseEntity<String>("USER_NOT_FOUND",HttpStatus.CONFLICT);
				}
			 
				User user=UserRepo.getUserByemail(info.getEmail());
				res.appendField("user", user);
				if(!user.isEnable()) {
					return new ResponseEntity<String>("User_Disabled",HttpStatus.CONFLICT);
				}
				Authentication  auth=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(info.getEmail(), info.getPassword()));	
				res.appendField("user", user);
		
				
				}catch (BadCredentialsException  e) {
				 return new ResponseEntity<String>("INVALID_CREDENTIALS",HttpStatus.CONFLICT);
			 	}
		UserDetails user_det=user_det_impl.loadUserByUsername(info.getEmail());
		

		String token=jwtTokenUtil.generateToken(user_det);
	
		res.appendField("token",token);
	
		return ResponseEntity.ok().body(res);
	}
}
