import request from "@/utils/request";
function getShelfInventoryList(data){ 
	 return request.post('/erp/api/v1/warehoue/shelfInventory/getShelfInventoryList',data);
}
function getShelfList(data){
	return request.post('/erp/api/v1/warehoue/shelfInventory/getShelfList',data)
}
function addShelfInventory(data){
	return request.post("/erp/api/v1/warehoue/shelfInventory/add",data)
}
function subShelfInventory(data){
	return request.post("/erp/api/v1/warehoue/shelfInventory/sub",data)
}
function shelfInventoryOptProList(data){
	return request.get("/erp/api/v1/warehouse/shelfInventoryOptPro/list",{params:data})
}
export default{
	subShelfInventory,
	getShelfInventoryList,
	getShelfList,
	addShelfInventory,
	shelfInventoryOptProList,
}