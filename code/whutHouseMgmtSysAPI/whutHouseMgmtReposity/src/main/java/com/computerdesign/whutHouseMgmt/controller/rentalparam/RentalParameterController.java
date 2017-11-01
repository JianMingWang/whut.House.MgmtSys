package com.computerdesign.whutHouseMgmt.controller.rentalparam;

import java.util.List;

import javax.validation.constraints.Null;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.computerdesign.whutHouseMgmt.bean.Msg;
import com.computerdesign.whutHouseMgmt.bean.rentalparam.RentalParameter;
import com.computerdesign.whutHouseMgmt.service.rentalparam.RentalParamService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@RequestMapping("/rentalParam/")
@Controller
public class RentalParameterController {

	@Autowired 
	RentalParamService rentalParamService;
	
	@ResponseBody
	@RequestMapping(value="get/{paramTypeId}",method = RequestMethod.GET)
	public Msg getRentalParameter(@PathVariable("paramTypeId")Integer paramTypeId,
			@RequestParam(value="page",defaultValue="1")Integer page,
			@RequestParam(value="size",defaultValue="10")Integer size){
		PageHelper.startPage(page, size);
		List<RentalParameter> rentalParameters=rentalParamService.getAll(paramTypeId);
		
		if(rentalParameters!=null){
			PageInfo pageInfo=new PageInfo(rentalParameters);
			return Msg.success().add("date", pageInfo);
		}else{
			return Msg.error("查找不到数据");
		}
	}
	
	@ResponseBody
	@RequestMapping(value="add",method =RequestMethod.POST)
	public Msg addRentalParameter(@RequestBody RentalParameter rentalParameter){
		if(rentalParameter.getRentalParamName()!=null){
			if(rentalParameter.getParamTypeId()!=null){
				rentalParamService.add(rentalParameter);
				return Msg.success().add("data", rentalParameter);
			}else{
				return Msg.error("paramTypeId不存在");
			}
		}
		else { 
			return Msg.error("rentalParamName不存在");
		}
	}

}
