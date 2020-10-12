INSERT INTO supplier(supp_id, address, category, company_name, email, name, status, telephone) VALUES('dd38fa97-acb2-4338-ac32-63b3d3312113', '112/F Florida US', 'material', 'TW material company', 'twMaterial@gmail.com', 'TW material' , 'registered' , '0712125964');
INSERT INTO supplier(supp_id, address, category, company_name, email, name, status, telephone) VALUES('f3c4f9da-6acd-4783-8c33-cedb1137dbd0', '55/F Kandy road', 'diamond', 'Diamond way pvt limited', 'Diamondway@gmail.com', 'Diamond way' , 'disabled' , '0813848908');
INSERT INTO supplier(supp_id, address, category, company_name, email, name, status, telephone) VALUES('6a3e845d-35a7-4adb-919f-e7b1f32034a3', '24/A Colombo', 'material', 'Designers X company', 'designersx@gmail.com', 'Designers X' , 'registered' , '0750895589');
INSERT INTO supplier(supp_id, address, category, company_name, email, name, status, telephone) VALUES('91b3781b-d81d-4ec5-9497-068eb51a31ac', '122/F California US', 'Jewellery', 'KT Brothers pvt limited', 'ktbrother@gmail.com', 'KT Brothers' , 'disabled' , '0724569853');
INSERT INTO supplier(supp_id, address, category, company_name, email, name, status, telephone) VALUES('c87fb334-c853-4a08-8478-df646f199a97', '90/A kandy Road ', 'Design', 'TUN HUANG pvt limited', 'tunhuang@gmail.com', 'TUN HUANG' , 'registered' , '0789852123');


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


INSERT INTO category(category_id, category_desc, category_name) VALUES('995e727e-4b5b-4bec-809b-e429263c6fad', 'Bangles for every wrist in a range of designs that are contemporary and sophisticated yet timelessly sublime.', 'Ring');
INSERT INTO category(category_id, category_desc, category_name) VALUES('c853a59f-70e8-4b3f-8d33-30fad79849dd', 'Pendants that are modern art or spiritual symbols, includes a range of Dhammachackras and Crosses.', 'Pendant');


INSERT INTO jewellery(jewellery_id, image_url, material, name, supply_price, category_id, supplier_supp_id)
VALUES('89296cc2-eb5c-4458-a49f-a19ef9ee9822','https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/nick-karvounis-RjeVqc8eC3s-unsplash.jpg', 'Gold','Bangles','12000','995e727e-4b5b-4bec-809b-e429263c6fad' , 'dd38fa97-acb2-4338-ac32-63b3d3312113');

INSERT INTO jewellery(jewellery_id, image_url, material, name, supply_price, category_id, supplier_supp_id)
VALUES('ea500811-8666-4dce-9ca5-c56ba7547836','https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/fallon-michael-orVNEDAylaU-unsplash.jpg', 'White Gold','Pendents','32000', 'c853a59f-70e8-4b3f-8d33-30fad79849dd','f3c4f9da-6acd-4783-8c33-cedb1137dbd0');

INSERT INTO jewellery(jewellery_id, image_url, material, name, supply_price, category_id, supplier_supp_id)
VALUES('ae15ae70-b739-48a9-9702-4462d8afdfb6','https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/nick-karvounis-RjeVqc8eC3s-unsplash.jpg', 'Silver','Bracelets','9000','c853a59f-70e8-4b3f-8d33-30fad79849dd','6a3e845d-35a7-4adb-919f-e7b1f32034a3');


INSERT INTO sellable(
	sellprice, jewellery_id)
	VALUES (12000, '89296cc2-eb5c-4458-a49f-a19ef9ee9822');
INSERT INTO sellable(
	sellprice, jewellery_id)
	VALUES (9000, 'ea500811-8666-4dce-9ca5-c56ba7547836');
INSERT INTO sellable(
	sellprice, jewellery_id)
	VALUES (19000, 'ae15ae70-b739-48a9-9702-4462d8afdfb6');


INSERT INTO record(leave_id, activity, activity_time, login_time, admin_emp_id)
    VALUES('866d9257-28b8-489c-8c62-b3fb6c981155', 'New requested design order assigned as a ongoing order', 'Sat Oct 10 2020 16:36:29', 'Sat Oct 10 2020 15:00:00', '532818b4-6123-44f8-ada7-2bd1289ca4f1');
INSERT INTO record(leave_id, activity, activity_time, login_time, admin_emp_id)
    VALUES('a8d973d2-f19f-49f8-bbd7-75f079b1c185', 'Ongoing design order assigned as a completed order', 'Sun Oct 11 2020 11:34:10', 'Sun Oct 11 2020 10:12:34', '532818b4-6123-44f8-ada7-2bd1289ca4f1');

INSERT INTO public.leave(
	leave_id, leave_from, leave_to, reason, employee_emp_id)
	VALUES 
	('7cf3f61f-6a26-48a3-9c00-9cf1ee84ced2', '2020-09-01', '2020-09-01', 'doctor appointment', 'fbe19622-d35c-44e3-8fa9-4e52cb3a1c9e'),
	('6fd2ac87-3701-427d-828d-2a626147e266', '2020-09-09', '2020-09-10', 'sick leave', 'fbe19622-d35c-44e3-8fa9-4e52cb3a1c9e'),
	('9835520a-71eb-49e8-9dcd-c7c70c4102d6', '2020-09-12', '2020-09-15', 'trip', 'fbe19622-d35c-44e3-8fa9-4e52cb3a1c9e'),
	('d3f443b3-0e76-47e0-88a6-11f22edf0341', '2020-09-26', '2020-09-26', 'family wedding','fbe19622-d35c-44e3-8fa9-4e52cb3a1c9e'),
	('a7e525ef-fd2b-489b-a4bb-a364c58dfa35', '2020-10-02', '2020-10-03', 'trip', '532818b4-6123-44f8-ada7-2bd1289ca4f1'),
	('1d74a11c-0f2d-49b1-999b-000a3b424918', '2020-10-15', '2020-10-18', 'family commitments', '70d60598-94e6-42d8-9d8a-5a730e4bf130'),
	('26cc2b9b-0cb8-47a6-80b9-f5b5d7e8a4b9', '2020-10-12', '2020-10-13', 'Family Member is Sick', 'd6246900-55d7-4894-9a2d-5443eb41585c'),
	('16407e62-d49b-4fb1-b5e5-83a3e614ac72', '2020-10-20', '2020-10-20', 'Dentist Appoinment', 'fbe19622-d35c-44e3-8fa9-4e52cb3a1c9e'),
	('47c9738d-b43a-466b-8004-b69c7051ff31', '2020-10-25', '2020-10-27', 'Going to the village', 'fbe19622-d35c-44e3-8fa9-4e52cb3a1c9e'),
	('02203b15-9307-4e05-bc97-713334ad88de', '2020-10-19', '2020-10-19', 'Family Birthday party', '532818b4-6123-44f8-ada7-2bd1289ca4f1'),
	('618bfd20-0062-49dd-b6d4-572d0c02a38a', '2020-10-30', '2020-10-31', 'getting some time off from work', 'd6246900-55d7-4894-9a2d-5443eb41585c');
