package com.scsu.ia;
/**
 * @purpose User class contains all user information
 * @author Darren
 *
 */
public class User {

	String userId = null;
	String userPass = null;
	String type = null;
	Double accountBalance = null;
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserPass() {
		return userPass;
	}
	public void setUserPass(String userPass) {
		this.userPass = userPass;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Double getAccountBalance() {
		return accountBalance;
	}
	public void setAccountBalance(Double accountBalance) {
		this.accountBalance = accountBalance;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", userPass=" + userPass + ", type=" + type + ", accountBalance="
				+ accountBalance + "]";
	}
	
	
}
