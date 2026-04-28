// assets/js/data.js

// Personal Information
const personalInfo = {
  name: 'Sai Aik Kwan',
  title: 'Networking & Cybersecurity Student',
  location: 'Mandalay, Myanmar',
  email: 'saiaikkwan.pro@gmail.com',
  github: 'https://github.com/sai-aik-kwan',
  linkedin: 'https://linkedin.com/in/sai-aik-kwan',
  college: 'Auston College, Myanmar',
  universityPartner: 'University of Wolverhampton, UK'
};

// Social Media Links
const socialMedia = {
  instagram: 'https://instagram.com/sai.aik.kwan.netsec',
  telegram: 'https://t.me/sai_aik_kwan',
  facebook: 'https://facebook.com/sai.aik.kwan.netsec',
  linkedin: 'https://linkedin.com/in/sai-aik-kwan',
  discord: 'https://discord.gg/aW4W4VVk'
};

// Education Timeline
const education = [
  {
    degree: 'Diploma in Infrastructure and Network',
    institution: 'Auston College, Myanmar',
    partner: 'In partnership with University of Wolverhampton, UK',
    year: '2025',
    status: 'completed',
    description: 'Specialized in network architecture, routing protocols, and infrastructure management.'
  },
  {
    degree: 'Intermediate English',
    institution: 'Headway',
    year: '2024',
    status: 'completed',
    description: 'Advanced English proficiency for technical and professional communication.'
  }
];

// Certifications
const certifications = {
  inProgress: [
    { name: 'CCNA (Cisco Certified Network Associate)', issuer: 'Cisco', status: 'In Progress' },
    { name: 'CompTIA Security+', issuer: 'CompTIA', status: 'In Progress' }
  ],
  completed: [
    { name: 'HTML', issuer: 'Self-Study', year: '2024' },
    { name: 'CSS', issuer: 'Self-Study', year: '2024' },
    { name: 'PHP', issuer: 'Self-Study', year: '2024' }
  ]
};

// Skills
const skills = {
  technical: [
    'Windows Server', 'Linux (Ubuntu, Kali)', 'Network Configuration',
    'Routing & Switching', 'Firewall Management', 'VPN Setup',
    'Virtualization', 'HTML/CSS', 'PHP', 'Bash Scripting'
  ],
  soft: [
    'Critical Thinking', 'Problem Solving', 'Communication',
    'Leadership', 'Team Collaboration', 'Time Management',
    'Analytical Skills', 'Documentation'
  ]
};

// Projects
const projects = [
  {
    title: 'Home Network Lab Setup',
    description: 'Built a complete home networking lab with VLAN segmentation, pfSense firewall, and managed switch configuration for hands-on practice.',
    technologies: ['pfSense', 'VLAN', 'Cisco CLI', 'DHCP', 'DNS'],
    githubUrl: 'https://github.com/sai-aik-kwan/network-lab',
    image: 'project1.jpg'
  },
  {
    title: 'Kali Linux Security Toolkit',
    description: 'Custom Kali Linux setup with essential penetration testing tools and custom scripts for network vulnerability assessment.',
    technologies: ['Kali Linux', 'Nmap', 'Wireshark', 'Metasploit', 'Bash'],
    githubUrl: 'https://github.com/sai-aik-kwan/kali-toolkit',
    image: 'project2.jpg'
  },
  {
    title: 'Windows Server 2022 Active Directory Lab',
    description: 'Deployed Windows Server 2022 with Active Directory Domain Services, Group Policy management, and user access controls in a virtualized environment.',
    technologies: ['Windows Server', 'Active Directory', 'Group Policy', 'PowerShell', 'Hyper-V'],
    githubUrl: 'https://github.com/sai-aik-kwan/ad-lab',
    image: 'project3.jpg'
  },
  {
    title: 'Network Monitoring with Zabbix',
    description: 'Implemented Zabbix monitoring solution for home network devices with custom alerts and performance dashboards.',
    technologies: ['Zabbix', 'SNMP', 'Grafana', 'MySQL', 'Linux'],
    githubUrl: 'https://github.com/sai-aik-kwan/zabbix-monitoring',
    image: 'project1.jpg'
  },
  {
    title: 'VPN Server with WireGuard',
    description: 'Configured secure WireGuard VPN server on Raspberry Pi for remote access to home network resources.',
    technologies: ['WireGuard', 'Raspberry Pi', 'Linux', 'Firewall', 'NAT'],
    githubUrl: 'https://github.com/sai-aik-kwan/wireguard-vpn',
    image: 'project2.jpg'
  },
  {
    title: 'Network Security Auditing Scripts',
    description: 'Collection of Python and Bash scripts for automated network scanning, port monitoring, and security auditing.',
    technologies: ['Python', 'Bash', 'Nmap', 'Scapy', 'Cron'],
    githubUrl: 'https://github.com/sai-aik-kwan/security-scripts',
    image: 'project3.jpg'
  }
];

// Testimonials
const testimonials = [
  {
    text: 'Sai demonstrates exceptional problem-solving skills in network configuration. His homelab projects show deep understanding of enterprise networking concepts.',
    author: 'Dr. Michael Chen',
    position: 'Program Director, Auston College'
  },
  {
    text: 'A dedicated student who goes beyond the curriculum. His self-initiated cybersecurity projects and GitHub portfolio reflect genuine passion for the field.',
    author: 'Sarah Johnson',
    position: 'Senior Lecturer, Network Infrastructure'
  }
];
