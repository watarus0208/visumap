package co.bean;

import java.io.Serializable;

public class TaxBean implements Serializable {
	private int no;
	private int year;
	private String id;
	private int tax;
	private String colorCode;

	public TaxBean() {
	}

	public TaxBean(int no, int year, String id, int tax) {
		this.no = no;
		this.year = year;
		this.id = id;
		this.tax = tax;
	}

	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getTax() {
		return tax;
	}

	public void setTax(int tax) {
		this.tax = tax;
	}

	public String getColorCode() {
		return colorCode;
	}

	public void setColorCode(String colorCode) {
		this.colorCode = colorCode;
	}
}
