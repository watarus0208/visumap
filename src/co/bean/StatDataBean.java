package co.bean;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class StatDataBean implements Serializable {
	private List<TaxBean> taxDataList = new ArrayList<>();
	private double latitude;
	private double longitude;
	private double max;
	private double min;

	public StatDataBean() {
	}

	public StatDataBean(List<TaxBean> taxDataList, double latitude, double longitude) {
		this.taxDataList = taxDataList;
		this.latitude = latitude;
		this.longitude = longitude;
	}

	//各値に対応するカラーコードを計算
	public void setColorCode() {
		max = getMax();
		min = getMin();
		if (taxDataList.size() != 0 || (max - min) != 0) {
			for (TaxBean bean : taxDataList) {
				double num = 255 - (bean.getTax() - min) / (max - min) * 255;
				String code = Integer.toHexString((int) num);
				String colorCode = null;
				if (code.length() == 1) {
					colorCode = "ff"+"0" + code + "0" + code;
				}else if (code.length()==2){
					colorCode = "ff" + code + code;
				}else{
					System.exit(1);
				}
				bean.setColorCode(colorCode);
			}
		}
	}

	public double getMax() {
		double tax = 0;
		if (taxDataList.size() != 0) {
			tax = taxDataList.get(0).getTax();
			for (TaxBean bean : taxDataList) {
				if (tax < bean.getTax()) {
					tax = bean.getTax();
				}
			}
			return tax;
		} else {
			return 0;
		}
	}

	public double getMin() {
		double tax = 0;
		if (taxDataList.size() != 0) {
			tax = taxDataList.get(0).getTax();
			for (TaxBean bean : taxDataList) {
				if (tax > bean.getTax()) {
					tax = bean.getTax();
				}
			}
			return tax;
		} else {
			return 0;
		}
	}

	public List<TaxBean> getTaxDataList() {
		return taxDataList;
	}

	public void setTaxDataList(List<TaxBean> taxDataList) {
		this.taxDataList = taxDataList;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
}
