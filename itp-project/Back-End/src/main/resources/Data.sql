INSERT INTO supplier(supp_id, address, category, company_name, email, name, status, telephone) VALUES('dd38fa97-acb2-4338-ac32-63b3d3312113', '112/F Florida US', 'material', 'TW material company', 'twMaterial@gmail.com', 'TW material' , 'registered' , '0712125964');
INSERT INTO supplier(supp_id, address, category, company_name, email, name, status, telephone) VALUES('f3c4f9da-6acd-4783-8c33-cedb1137dbd0', '55/F Kandy road', 'diamond', 'Diamond way pvt limited', 'Diamondway@gmail.com', 'Diamond way' , 'disabled' , '0813848908');
INSERT INTO supplier(supp_id, address, category, company_name, email, name, status, telephone) VALUES('6a3e845d-35a7-4adb-919f-e7b1f32034a3', '24/A Colombo', 'material', 'Designers X company', 'designersx@gmail.com', 'Designers X' , 'registered' , '0750895589');
INSERT INTO supplier(supp_id, address, category, company_name, email, name, status, telephone) VALUES('91b3781b-d81d-4ec5-9497-068eb51a31ac', '122/F California US', 'Jewellery', 'KT Brothers pvt limited', 'ktbrother@gmail.com', 'KT Brothers' , 'disabled' , '0724569853');
INSERT INTO supplier(supp_id, address, category, company_name, email, name, status, telephone) VALUES('c87fb334-c853-4a08-8478-df646f199a97', '90/A kandy Road ', 'Design', 'TUN HUANG pvt limited', 'tunhuang@gmail.com', 'TUN HUANG' , 'registered' , '0789852123')

INSERT INTO jewellery(jewellery_id, category, description, image_url, material, name, supply_price, supplier_supp_id) VALUES('499f822d-41da-4996-9c54-8336972947be', 'Pendant', '');

INSERT INTO employee
(emp_id, nic, fname, l_name, "position")
VALUES('f2158718-76d7-4770-a90f-874cfb7d9611', '992573228V', 'Ruvin', 'Wijesinghe', 'Delivery Boy');
INSERT INTO employee
(emp_id, nic, fname, l_name, "position")
VALUES('2ade299f-f48c-4109-b863-ff96659d57d1', '992573248V', 'Chamara', 'Wijesinghe', 'Delivery Boy');
INSERT INTO deliver_boy
("password", telephone, username, emp_id)
VALUES('Password123', '0771922433', 'Ruvin Wijesinghe', 'f2158718-76d7-4770-a90f-874cfb7d9611');
INSERT INTO deliver_boy
("password", telephone, username, emp_id)
VALUES('Password12', '0771922434', 'Chamara Wijesinghe', '2ade299f-f48c-4109-b863-ff96659d57d1');


INSERT INTO employee(emp_id, nic, fname, l_name, position) VALUES('532818b4-6123-44f8-ada7-2bd1289ca4f1', '971332948V', 'Shihara', 'Dilshan', 'Jewellery Owner');
INSERT INTO employee(emp_id, nic, fname, l_name, position) VALUES('d6246900-55d7-4894-9a2d-5443eb41585c', '971332945V', 'Lalinda', 'Kumara', 'Jewellery Manager');
INSERT INTO employee(emp_id, nic, fname, l_name, position) VALUES('fbe19622-d35c-44e3-8fa9-4e52cb3a1c9e', '871233933V', 'Saman', 'Edirisinghe', 'Leave Manager');
INSERT INTO employee(emp_id, nic, fname, l_name, position) VALUES('70d60598-94e6-42d8-9d8a-5a730e4bf130', '761344232V', 'Nuwan', 'Sagara', 'Service Manager');
INSERT INTO employee(emp_id, nic, fname, l_name, position) VALUES('42dfd554-b614-4ec1-9ea9-e1b55b78fded', '454645454V', 'Sagala', 'Rathnayake', 'Stock Manager');
INSERT INTO employee(emp_id, nic, fname, l_name, position) VALUES('f7c0b263-588b-42cb-bc61-567758bd3136', '767737475V', 'Lalith', 'Samarasinghe', 'Rental Manager');

INSERT INTO admin(emp_id, uname, password ,roles, active) VALUES('532818b4-6123-44f8-ada7-2bd1289ca4f1', 'root', 'classified23', 'ROLE_ROOT', 'active');
INSERT INTO admin(emp_id, uname, password ,roles, active) VALUES('f7c0b263-588b-42cb-bc61-567758bd3136', 'Lalinda_Kumara', 'classified23', 'ROLE_USER', 'active');
INSERT INTO admin(emp_id, uname, password ,roles, active) VALUES('42dfd554-b614-4ec1-9ea9-e1b55b78fded', 'Saman_Edirisinghe', 'classified23', 'ROLE_USER', 'active');
INSERT INTO admin(emp_id, uname, password ,roles, active) VALUES('70d60598-94e6-42d8-9d8a-5a730e4bf130', 'Nuwan_Sagara', 'classified23', 'ROLE_USER', 'active');
INSERT INTO admin(emp_id, uname, password ,roles, active) VALUES('fbe19622-d35c-44e3-8fa9-4e52cb3a1c9e', 'Sagala_Rathnayake', 'classified23', 'ROLE_USER', 'active');
INSERT INTO admin(emp_id, uname, password ,roles, active) VALUES('d6246900-55d7-4894-9a2d-5443eb41585c', 'Lalith_Samarasinghe', 'classified23', 'ROLE_USER', 'active');

INSERT INTO design(design_id, description, image_url, name, price) VALUES('ef89c72e-5e39-4299-a474-4f055b06435b', 'Materrial design', 'http://www.voguejewellers.lk/wp-content/uploads/2019/09/PNZ23-324x324.jpg', 'Pendant', '12000');
INSERT INTO design(design_id, description, image_url, name, price) VALUES('13896449-7cb5-49d5-b1e5-5fbe5c6779a5', 'edge designs design X', 'http://www.voguejewellers.lk/wp-content/uploads/2019/07/18-2.jpg', 'Design-X 16mm', '10000');
INSERT INTO design(design_id, description, image_url, name, price) VALUES('e5bee0e5-aec9-4b6f-8a60-bf7206466604', 'Golden material design class', 'http://www.voguejewellers.lk/wp-content/uploads/2019/07/18-2.jpg', 'Design-X 16mm', '9000');
INSERT INTO design(design_id, description, image_url, name, price) VALUES('995e727e-4b5b-4bec-809b-e429263c6fad', 'Silver design class', 'http://www.voguejewellers.lk/wp-content/uploads/2019/07/18-2.jpg', 'Design-X 16mm', '15000');
INSERT INTO design(design_id, description, image_url, name, price) VALUES('c853a59f-70e8-4b3f-8d33-30fad79849dd', 'Diamond most valuable design of all', 'http://www.voguejewellers.lk/wp-content/uploads/2019/07/18-2.jpg', 'Design-X 16mm', '30000');


