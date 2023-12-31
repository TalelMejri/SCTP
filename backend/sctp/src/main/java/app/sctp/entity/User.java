package app.sctp.entity;


import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data@AllArgsConstructor@NoArgsConstructor
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String email;
	
	private String nom;
	
	private String prenom;
	
	private String sex;
	
	private String password;
	
	private String num_tlf;
	
	private String role;
	
	@ColumnDefault(value = "false")
	private boolean Enable;
	
	@ColumnDefault(value = "null")
	private String  password_token;
	
	
	@Temporal(TemporalType.TIMESTAMP)
	@ColumnDefault(value = "null")
	private Date password_token_send_ats;
	
	@CreationTimestamp
	private Timestamp created_at;
	
	@UpdateTimestamp
	private Timestamp updated_at;
	
}
