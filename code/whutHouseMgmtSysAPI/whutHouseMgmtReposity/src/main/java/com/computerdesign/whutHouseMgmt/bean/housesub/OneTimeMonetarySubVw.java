package com.computerdesign.whutHouseMgmt.bean.housesub;

import java.math.BigDecimal;

public class OneTimeMonetarySubVw {
    private Integer id;

    private Integer staffId;

    private String staffNo;

    private String staffName;

    private Integer deptId;

    private String deptName;

    private String oneTimeSubYear;

    private BigDecimal oneTimeSubsidy;

    private String remark;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getStaffId() {
        return staffId;
    }

    public void setStaffId(Integer staffId) {
        this.staffId = staffId;
    }

    public String getStaffNo() {
        return staffNo;
    }

    public void setStaffNo(String staffNo) {
        this.staffNo = staffNo == null ? null : staffNo.trim();
    }

    public String getStaffName() {
        return staffName;
    }

    public void setStaffName(String staffName) {
        this.staffName = staffName == null ? null : staffName.trim();
    }

    public Integer getDeptId() {
        return deptId;
    }

    public void setDeptId(Integer deptId) {
        this.deptId = deptId;
    }

    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName == null ? null : deptName.trim();
    }

    public String getOneTimeSubYear() {
        return oneTimeSubYear;
    }

    public void setOneTimeSubYear(String oneTimeSubYear) {
        this.oneTimeSubYear = oneTimeSubYear == null ? null : oneTimeSubYear.trim();
    }

    public BigDecimal getOneTimeSubsidy() {
        return oneTimeSubsidy;
    }

    public void setOneTimeSubsidy(BigDecimal oneTimeSubsidy) {
        this.oneTimeSubsidy = oneTimeSubsidy;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

	@Override
	public String toString() {
		return "OneTimeMonetarySubVw [id=" + id + ", staffId=" + staffId + ", staffNo=" + staffNo + ", staffName="
				+ staffName + ", deptId=" + deptId + ", deptName=" + deptName + ", oneTimeSubYear=" + oneTimeSubYear
				+ ", oneTimeSubsidy=" + oneTimeSubsidy + ", remark=" + remark + "]";
	}
    
    
}