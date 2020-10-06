INSERT INTO supplier(supp_id, address, category, company_name, email, name, status, telephone) VALUES('dd38fa97-acb2-4338-ac32-63b3d3312113', '112/F Florida US', 'material', 'TW material company', 'twMaterial@gmail.com', 'TW material' , 'registered' , '0712125964');
INSERT INTO supplier(supp_id, address, category, company_name, email, name, status, telephone) VALUES('f3c4f9da-6acd-4783-8c33-cedb1137dbd0', '55/F Kandy road', 'diamond', 'Diamond way pvt limited', 'Diamondway@gmail.com', 'Diamond way' , 'disabled' , '0813848908');
INSERT INTO supplier(supp_id, address, category, company_name, email, name, status, telephone) VALUES('6a3e845d-35a7-4adb-919f-e7b1f32034a3', '24/A Colombo', 'material', 'Designers X company', 'designersx@gmail.com', 'Designers X' , 'registered' , '0750895589');
INSERT INTO supplier(supp_id, address, category, company_name, email, name, status, telephone) VALUES('91b3781b-d81d-4ec5-9497-068eb51a31ac', '122/F California US', 'Jewellery', 'KT Brothers pvt limited', 'ktbrother@gmail.com', 'KT Brothers' , 'disabled' , '0724569853');
INSERT INTO supplier(supp_id, address, category, company_name, email, name, status, telephone) VALUES('c87fb334-c853-4a08-8478-df646f199a97', '90/A kandy Road ', 'Design', 'TUN HUANG pvt limited', 'tunhuang@gmail.com', 'TUN HUANG' , 'registered' , '0789852123');
INSERT INTO jewellery(jewellery_id, category, description, image_url, material, name, supply_price, supplier_supp_id) VALUES('499f822d-41da-4996-9c54-8336972947be', 'Pendant', '');
INSERT INTO public.employee
(emp_id, nic, fname, l_name, "position")
VALUES('f2158718-76d7-4770-a90f-874cfb7d9611', '992573228V', 'Ruvin', 'Wijesinghe', 'Delivery Boy');
INSERT INTO public.employee
(emp_id, nic, fname, l_name, "position")
VALUES('2ade299f-f48c-4109-b863-ff96659d57d1', '992573248V', 'Chamara', 'Wijesinghe', 'Delivery Boy');
INSERT INTO public.deliver_boy
("password", telephone, username, emp_id)
VALUES('Password123', '0771922433', 'Ruvin Wijesinghe', 'f2158718-76d7-4770-a90f-874cfb7d9611');
INSERT INTO public.deliver_boy
("password", telephone, username, emp_id)
VALUES('Password12', '0771922434', 'Chamara Wijesinghe', '2ade299f-f48c-4109-b863-ff96659d57d1');