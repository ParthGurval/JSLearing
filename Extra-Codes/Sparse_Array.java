package com.wipro.sparseArray;

public class Sparse_Array {

public static void main(String[] args) {
		
		String[] inputString = {"ab", "ab", "abc"};
		String[] queryString = {"ab", "abc", "bc"};
	
		int[] result = totalQueries(inputString, queryString);
		
		for(int count : result) {
			
			System.out.println(count);
		}
	}
	
	public static int[] totalQueries(String[] inputString, String[] queryString) {
		
		// we need iterate query here
		
		for(int i=0; i < queryString.length; i++) {
			
			String query = queryString[i];
			
			int count = 0;
			
			// To iterate String loop here
			
			for(int j=0; j < inputString.length; j++) {
				
				if(query.equals(inputString[j])) {
					
					count++;
				}
			}
			
			return result;
		}
}
