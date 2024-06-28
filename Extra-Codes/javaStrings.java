package com.wipro.String;

public class javaStrings {

	public static void main(String[] args) {
		
		String str1 = "Parth";
		
		String str2 = "The CS Engineer";
		
		System.out.println("First String is: "+str1);
		System.out.println("Second String is: "+str2);
		
		String res1 = concatString(str1, str2);
		System.out.println("Concatined String is: "+res1);
		
		String result = reverseString(str1, str2);
		System.out.println("Reversed String is: "+result);
		
	}
	
	public static String concatString(String str1, String str2) {
		
		return str1 + str2;
	}
	
	public static String reverseString(String str1, String str2) {
		
		String reverseStr = "";
		
		for(int i = str.length() - 1; i >= 0 ; i--) {
			
			reverseStr = reverseStr + str.charAt(i);
		}
		
		return reverseStr;
		
	}
}
