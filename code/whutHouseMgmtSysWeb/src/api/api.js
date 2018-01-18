import axios from 'axios'

let base = 'http://localhost:8080/whutHouseMgmtReposity/'

// 参数设置--职工参数
// 获取方法
export const getStaffParam = (params, paramClass) => { return axios.get(`${base}staffParam/get/${paramClass}`, { params: params }) }
// 删除方法
export const deleteStaffParam = (staffParamId) => { return axios.delete(`${base}staffParam/delete/${staffParamId}`) }
// 新增方法
export const postStaffParam = (params) => { return axios.post(`${base}staffParam/add`, params) }
// 编辑方法
export const putStaffParam = (params) => { return axios.put(`${base}staffParam/modify`, params) }

// 参数设置--房屋参数
// 获取方法
export const getHouseParam = (params, paramClass) => { return axios.get(`${base}houseParam/get/${paramClass}`, { params: params }) }
// 删除方法
export const deleteHouseParam = (houseParamsId) => { return axios.delete(`${base}houseParam/delete/${houseParamsId}`) }
// 新增方法
export const postHouseParam = (params) => { return axios.post(`${base}houseParam/add`, params) }
// 编辑方法
export const putHouseParam = (params) => { return axios.put(`${base}houseParam/modify`, params) }

// 参数设置--租赁参数
// 获取方法【与职工相关】
export const getRentParamAboutStaff = (params, paramClass) => { return axios.get(`${base}rentParamAboutStaff/get/${paramClass}`, { params: params }) }
// 修改方法【与职工相关】
export const putRentParamAboutStaff = (params) => { return axios.put(`${base}rentParamAboutStaff/modify`, params) }
// 获取方法【选房选项】
export const getRentParamAboutEvent = (params) => { return axios.get(`${base}rentEvent/get`, { params: params }) }
// 新增方法【选房选项】
export const postRentParamAboutEvent = (params) => { return axios.post(`${base}rentEvent/add`, params) }
// 删除方法【选房选项】
export const deleteRentParamAboutEvent = (rentEventId) => { return axios.delete(`${base}rentEvent/delete/${rentEventId}`) }

// 参数设置--维修参数
// 获取方法
export const getFixParam = (params, paramClass) => { return axios.get(`${base}fixParam/get/${paramClass}`, { params: params }) }
// 删除方法
export const deleteFixParam = (paramsId) => { return axios.delete(`${base}fixParam/delete/${paramsId}`) }
// 新增方法
export const postFixParam = (params) => { return axios.post(`${base}fixParam/add`, params) }
// 编辑方法
export const putFixParam = (params) => { return axios.put(`${base}fixParam/modify`, params) }

// 参数设置--租金参数
// 获取方法
export const getRentalParam = (params) => { return axios.get(`${base}rentalParam/get`, { params: params }) }
// 修改方法
export const putRentalParam = (params) => { return axios.put(`${base}rentalParam/modify`, params) }

// 基础数据--区域管理
// 获取方法with楼栋
export const getRegionWithBuildings = (params) => { return axios.get(`${base}region/getRegionWithBuildings`, { params: params }) }
// 获取方法
export const getRegionData = (params) => { return axios.get(`${base}region/get`, { params: params }) }
// 删除方法
export const deleteRegionData = (dataID) => { return axios.delete(`${base}region/delete/${dataID}`) }
// 新增方法
export const postRegionData = (params) => { return axios.post(`${base}region/add`, params) }
// 修改方法
export const putRegionData = (params) => { return axios.put(`${base}region/modify`, params) }

// 基础数据-楼栋管理
// 获取方法
export const getbuildingDataByID = (params, regionID) => { return axios.get(`${base}building/getAllByRegionId/${regionID}`, { params: params }) }
// 新增方法
export const postBuildingData = (params) => { return axios.post(`${base}building/add`, params) }
// 修改方法
export const putBuildingData = (params) => { return axios.put(`${base}building/modify`, params) }
// 删除方法
export const deleteBuildingData = (buildingID) => { return axios.delete(`${base}building/delete/${buildingID}`) }

// 基础数据-房屋管理
// 获取方法--可以获取全部的
export const getHouse = (params) => { return axios.get(`${base}house/get`, { params: params }) }
// 获取方法--根据楼栋id
export const getHouseByBuildingID = (params, buildingID) => { return axios.get(`${base}house/getViewHousesByBuildingId/${buildingID}`, { params: params }) }
// 获取方法--根据区域id
export const getHouseByRegionID = (params, region) => { return axios.get(`${base}house/getViewHousesByRegionId/${region}`, { params: params }) }
// 删除方法
export const deleteHouseData = (houseID) => { return axios.delete(`${base}house/delete/${houseID}`) }
// 新增方法
export const postHouseData = (params) => { return axios.post(`${base}house/add`, params) }
// 修改方法
export const putHouseData = (params) => { return axios.put(`${base}house/modify`, params) }

// 基础数据-职工管理
// 获取方法--获取全部部门带员工信息
export const getDept = (params) => { return axios.get(`${base}staff/getDepts`, { params: params }) }
// 获取方法--获取单一部门的详细员工信息
export const getSingleDept = (params, deptID) => { return axios.get(`${base}staff/get/${deptID}`, { params: params }) }
// 删除方法
export const deleteStaffData = (staffID) => { return axios.delete(`${base}staff/delete/${staffID}`) }
