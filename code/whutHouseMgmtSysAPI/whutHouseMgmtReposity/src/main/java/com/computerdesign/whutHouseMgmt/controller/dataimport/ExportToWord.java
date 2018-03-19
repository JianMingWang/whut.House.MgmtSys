package com.computerdesign.whutHouseMgmt.controller.dataimport;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.computerdesign.whutHouseMgmt.bean.Msg;
import com.computerdesign.whutHouseMgmt.bean.staffmanagement.ViewStaff;
import com.computerdesign.whutHouseMgmt.core.DocumentHandler;
import com.computerdesign.whutHouseMgmt.service.staffmanagement.ViewStaffService;
import com.computerdesign.whutHouseMgmt.utils.DateUtil;
import com.computerdesign.whutHouseMgmt.utils.ResponseUtil;

/**
 *
 * @author wanhaoran
 * @date 2018年3月18日 下午2:31:22
 * 
 */
@RestController
@RequestMapping("/exportToWord/")
public class ExportToWord {

	@Autowired
	private ViewStaffService viewStaffService;
	
	@GetMapping(value= "hire/{staffId}")
	public Msg downloadHireApply(@PathVariable("staffId")Integer staffId) throws Exception {
		
		if (viewStaffService.getByStaffId(staffId).isEmpty()) {
			//TODO
			return Msg.error();
		}
		ViewStaff viewStaff = viewStaffService.getByStaffId(staffId).get(0);
		String[] fileds = { "Id", "No", "MarriageState","Name", "Sex","TitleName", "DeptName", "Tel", 
				"SpouseName","SpouseKindName","SpouseDept","SpouseTitleName","SpouseTel","EduQualifications","Code"};
		Map<String, Object> response = ResponseUtil.getResultMap(viewStaff, fileds);
		
		DocumentHandler documentHandler = new DocumentHandler();

		String outFileName = "租赁申请"+DateUtil.getCurrentDate("yyyyMMdd")+response.get("Name");
		String outFilePath = DocumentHandler.class.getClassLoader().getResource("../../").getPath() + "WEB-INF/HireFiles/"+outFileName+".doc";
		String modelFileName = "申请租赁住房表格.ftl";
		
		documentHandler.createDocArea(response, outFilePath, modelFileName);
		return Msg.success();

	}

}