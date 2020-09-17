package com.noobstack.jewellery.security;

import com.noobstack.jewellery.model.Admin;
import com.noobstack.jewellery.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {
    private AdminRepository adminRepository;

    @Autowired
    public MyUserDetailsService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String uname) throws UsernameNotFoundException {
        Optional<Admin> admin= this.adminRepository.findByUname(uname);

        admin.orElseThrow(() -> new UsernameNotFoundException("Admin does not exist" + uname));

        return admin.map(MyUserDetails::new).get();
    }
}
