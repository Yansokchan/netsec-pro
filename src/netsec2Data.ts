import { Question } from './types';

export const questions: Question[] = [
  {
    "id": 1,
    "text": "Which two tools can be used to configure Cloud NGFWs for AWS? (Choose two.)",
    "options": {
      "A": "Prisma Cloud management console",
      "B": "Cortex XSIAM",
      "C": "Cloud service provider (CSP) management console",
      "D": "Panorama"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": 2,
    "text": "In which two applications can Prisma Access threat logs for mobile user traffic be reviewed? (Choose two.)",
    "options": {
      "A": "Prisma Cloud dashboard",
      "B": "Strata Cloud Manager (SCM)",
      "C": "Strata Logging Service",
      "D": "Service connection firewall"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 3,
    "text": "A network security engineer needs to implement segmentation but is under strict compliance requirements to place security\nenforcement as close as possible to the private applications hosted in Azure.\nWhich deployment style is valid and meets the requirements in this scenario?",
    "options": {
      "A": "On a PA-Series NGFW, configure several Layer 3 zones with Layer 3 interfaces assigned to logically segment the network.",
      "B": "On a VM-Series NGFW, configure several Layer 3 zones with Layer 3 interfaces assigned to logically segment the network.",
      "C": "On a VM-Series NGFW, configure several Layer 2 zones with Layer 2 interfaces assigned to logically segment the network.",
      "D": "On a PA-Series NGFW, configure several Layer 2 zones with Layer 2 interfaces assigned to logically segment the network."
    },
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 4,
    "text": "When adding a Zero Touch Provisioning (ZTP) firewall to Panorama, when can the firewall be powered on?",
    "options": {
      "A": "During license activation",
      "B": "After activating registration and completing license deployment profile",
      "C": "After all required installation and setup procedures are completed",
      "D": "During installation"
    },
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 5,
    "text": "Which profile can help prevent the transmission of sensitive information to internet applications?",
    "options": {
      "A": "Antivirus",
      "B": "Data Filtering",
      "C": "Anti-spyware",
      "D": "URL Filtering"
    },
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 6,
    "text": "How do template stacks help manage firewall configurations in Panorama?",
    "options": {
      "A": "By grouping templates across multiple firewalls",
      "B": "By creating template variables for permanent configurations in firewalls",
      "C": "By creating a diagram of the network for a view of all firewalls",
      "D": "By handling firmware updates across multiple firewalls"
    },
    "answer": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": 7,
    "text": "Which subscription sends non-file format-based traffic that matches Data Filtering profile criteria to a cloud service to render a\nverdict?",
    "options": {
      "A": "SaaS Security Inline",
      "B": "Enterprise DLP",
      "C": "Advanced URL Filtering",
      "D": "Advanced WildFire"
    },
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 8,
    "text": "A cloud security architect is designing a certificate management strategy for Strata Cloud Manager (SCM) across hybrid\nenvironments.\nWhich practice ensures optimal security with low management overhead?",
    "options": {
      "A": "Implement separate certificate authorities with independent validation rules for each cloud environment.",
      "B": "Configure manual certificate deployment with quarterly reviews and environment-specific security protocols.",
      "C": "Use cloud provider default certificates with scheduled synchronization and localized renewal processes.",
      "D": "Deploy centralized certificate automation with standardized protocols and continuous monitoring."
    },
    "answer": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": 9,
    "text": "Which two prerequisites must be evaluated when decrypting internet-bound traffic? (Choose two.)",
    "options": {
      "A": "Incomplete certificate chains",
      "B": "RADIUS profile",
      "C": "Certificate pinning",
      "D": "SAML certificate"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 10,
    "text": "In which order does an NGFW process URL categories for Security policy?",
    "options": {
      "A": "1. External dynamic lists",
      "B": "1. Custom URL categories",
      "C": "1. Custom URL categories",
      "D": "1. Predefined categories"
    },
    "answer": [
      "A"
    ],
    "explanation": "0aaeb28 3 weeks, 1 day ago\nSelected Answer: B\nThe correct answer is:\n**B.\nCustom URL categories\nExternal dynamic lists\nPredefined categories**\nWhy this order matters:\nCustom URL categories are evaluated first because they are the most specific and explicitly defined by the administrator. They’re meant to override\neverything else.\nExternal Dynamic Lists (EDLs) come next, since they are still user-defined (though externally sourced) and should take precedence over vendor\ndefaults.\nPredefined categories are evaluated last, as they are the baseline provided by the firewall vendor.\nThis hierarchy ensures that your explicit policies take priority over external feeds, and both override default categorization, which is exactly how you\nmaintain control in a Palo Alto NGFW environment.\nupvoted 2 times"
  },
  {
    "id": 11,
    "text": "What must be configured to successfully onboard a Prisma Access remote network using Strata Cloud Manager (SCM)?",
    "options": {
      "A": "Cloud Identity Engine",
      "B": "GlobalProtect agent",
      "C": "IPSec termination node",
      "D": "Autonomous Digital Experience Manager (ADEM)"
    },
    "answer": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 12,
    "text": "Which zone is available for use in Prisma Access?",
    "options": {
      "A": "Clientless VPN Most Voted",
      "B": "DMZ",
      "C": "Interzone",
      "D": "Intrazone"
    },
    "answer": [
      "D"
    ],
    "explanation": "edmuffins Highly Voted 2 months, 1 week ago\nSelected Answer: A\nPrisma Access operates in 3 zones - Trust, Untrust and Clientless VPN:\nhttps://docs.paloaltonetworks.com/prisma-access/administration/prisma-access-setup/prisma-access-zones\nupvoted 6 times"
  },
  {
    "id": 13,
    "text": "Which firewall attribute simplifies rule creation and automatically adapts to changes in server roles or security posture based on\nlog events?",
    "options": {
      "A": "Dynamic Address Groups",
      "B": "Dynamic User Groups",
      "C": "Predefined IP addresses",
      "D": "Address objects"
    },
    "answer": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": 14,
    "text": "What is a necessary step for creation of a custom Prisma Access report on Strata Cloud Manager (SCM)?",
    "options": {
      "A": "Open a support ticket.",
      "B": "Configure a dashboard.",
      "C": "Generate a PDF summary report.",
      "D": "Set up Cloud Identity Engine."
    },
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 15,
    "text": "Which feature of SaaS Security will allow a firewall administrator to identify unknown SaaS\napplications in an environment?",
    "options": {
      "A": "App-ID Cloud Engine",
      "B": "SaaS Data Security",
      "C": "Cloud Identity Engine",
      "D": "App-ID"
    },
    "answer": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": 16,
    "text": "When a rule has been set up to block uploading all Portable Executable (PE) files, which type of log will display blocked files that\nattempt to traverse the network?",
    "options": {
      "A": "Traffic",
      "B": "Data filtering",
      "C": "URL filtering",
      "D": "Threat"
    },
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 17,
    "text": "A network security engineer wants to forward Strata Logging Service data to tools used by the security operations center (SOC) for\nfurther investigation.\nIn which best practice step of Palo Alto Networks Zero Trust does this fit?",
    "options": {
      "A": "Implementation",
      "B": "Standards and Designs",
      "C": "Map and Verify Transactions",
      "D": "Report and Maintenance"
    },
    "answer": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": 18,
    "text": "Using Prisma Access, which solution provides the most security coverage of network protocols for the mobile workforce?",
    "options": {
      "A": "Enterprise browser",
      "B": "Explicit proxy",
      "C": "Client-based VPN",
      "D": "Clientless VPN"
    },
    "answer": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 19,
    "text": "Which Security policy on a data center NGFW will block intrazone traffic in Zone Colorado for the Dynamic User Group \"Testers\"\nand custom application \"Payment System\"?",
    "options": {
      "A": "Source & Destination Zone = Colorado",
      "B": "Source & Destination Zone = Colorado",
      "C": "Source Zone = Colorado -",
      "D": "Source Zone = Colorado -"
    },
    "answer": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": 20,
    "text": "A primary firewall in a high availability (HA) pair is experiencing a current failover issue with ICMP pings to a secondary device.\nWhich metric should be reviewed for proper ICMP pings between the firewall pair?",
    "options": {
      "A": "Non-functional state",
      "B": "Bidirectional Forwarding Detection (BFD)",
      "C": "Link monitoring",
      "D": "Heartbeat polling"
    },
    "answer": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": 21,
    "text": "After a firewall is associated with Strata Cloud Manager (SCM), which two additional actions are required to enable management\nof the firewall from SCM? (Choose two.)",
    "options": {
      "A": "Device certificate → The firewall needs a valid certificate to authenticate securely with Strata Cloud Manager (SCM). Without it, management",
      "B": "Configure a Security policy allowing \"stratacloudmanager.paloaltonetworks.com\" for all users.",
      "C": "NTP and DNS → These are foundational:",
      "D": "Deploy a service connection for each branch site and connect with SCM."
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "0aaeb28 3 weeks ago\nSelected Answer: AC\nWhy these are required:\nA. Device certificate → The firewall needs a valid certificate to authenticate securely with Strata Cloud Manager (SCM). Without it, management\ncommunication won’t be established properly.\nC. NTP and DNS → These are foundational:\nDNS is required to resolve SCM endpoints.\nNTP ensures correct time, which is critical for certificate validation and secure communication.\nWhy the others are not required:\nB → You don’t need a specific Security policy allowing that FQDN “for all users”; management traffic is handled by the system, not via a user-based\nSecurity policy like that.\nD → Service connections are related to Prisma Access or branch connectivity, not required just to enable SCM management of a firewall.\nupvoted 2 times\n0b4d744 2 months ago\nSelected Answer: AC\nBoth of these are necessary. B is not necessary because of the default rules out of the box and D is not because it applies to specific architectures\n(like Prisma Access), not basic SCM firewall management.\nupvoted 3 times\nedmuffins 2 months, 1 week ago\nSelected Answer: AC\nConfigure NTP and DNS servers for the firewall: You must configure the firewall's DNS and NTP servers because this is required for the firewall to\nsuccessfully connect to Strata Cloud Manager and to install software and content updates\nupvoted 4 times"
  },
  {
    "id": 22,
    "text": "In which order is Prisma SD-WAN dynamic path selection performed?",
    "options": {
      "A": "1. Determine potential paths based on policy.",
      "B": "1. Measure link capacity.",
      "C": "1. Determine potential paths based on policy.",
      "D": "1. Determine link quality."
    },
    "answer": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": 23,
    "text": "Which two frameworks are compared in the Compliance Summary dashboard of Strata Cloud Manager (SCM)? (Choose two.)",
    "options": {
      "A": "GDPR",
      "B": "NIST",
      "C": "PCI-DSS",
      "D": "CIS"
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": 24,
    "text": "Which NGFW tool should be reviewed when a management team wants feedback on how to reduce the attack surface of their\nnetwork security deployment and how it maps to the Center for Internet Security (CIS) Critical Security Controls?",
    "options": {
      "A": "Executive summary report",
      "B": "Policy Optimizer",
      "C": "Best Practice Assessment (BPA)",
      "D": "Command Center"
    },
    "answer": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 25,
    "text": "A network engineer pushes specific Panorama reports of new AI URL category types to branch NGFWs.\nWhich two report types achieve this goal? (Choose two.)",
    "options": {
      "A": "AI → Not a report type; it refers to a category or data classification, not a reporting format.",
      "B": "PDF summary",
      "C": "Custom",
      "D": "SNMP → Used for monitoring and alerts, not for delivering structured reports like URL category summaries."
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "PA_fan 5 days, 23 hours ago\nSelected Answer: BC\nHere are the different types :\nCustom ,Summary, Predefined, NonUser/Group Activity\nupvoted 1 times\n0aaeb28 3 weeks ago\nSelected Answer: BC\nThe correct answers are:\nB. PDF summary\nC. Custom\nWhy:\nTo push specific Panorama-generated reports (like AI URL category usage) to branch NGFWs, you need report formats that are:\nConfigurable\nExportable / distributable\nSupported for scheduled or forwarded delivery\nB. PDF summary\nProvides a portable, shareable report format\nCommonly used for scheduled distribution from Panorama to firewalls or external systems\nSuitable for delivering summarized AI URL category insights\nC. Custom\nAllows the engineer to define exactly what data is included, such as AI-based URL categories\nCan be tailored to branch-specific reporting needs\nSupports flexible scheduling and distribution\nWhy not the others:\nA. AI → Not a report type; it refers to a category or data classification, not a reporting format.\nD. SNMP → Used for monitoring and alerts, not for delivering structured reports like URL category summaries.\nupvoted 1 times\nedmuffins 2 months, 1 week ago\nSelected Answer: BC\nAI is not a report type.\nupvoted 1 times"
  },
  {
    "id": 26,
    "text": "Which two types of logs must be forwarded to Strata Logging Service for IoT Security to function? (Choose two.)",
    "options": {
      "A": "WildFire",
      "B": "Enhanced application Most Voted",
      "C": "Threat",
      "D": "Traffic Most Voted"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": "0aaeb28 3 weeks ago\nSelected Answer: CD\nYou should read the whole webpage, it states:\nDevice Security uses Enhanced Application logs (EALs), traffic logs (which include DHCP traffic), threat logs, and wildfire logs. Make sure that your\npolicy rules have logging enabled and are forwarding EALs and traffic logs to Strata Logging Service. Although the last two log types are not required\nfor Device Security to function, we recommend getting licenses for threat prevention and Wildfire and forwarding their logs as well because they\nhelp improve risk assessment and malware detection.\nupvoted 1 times\nd624435 1 month, 1 week ago\nSelected Answer: BD\nThe IoT- Device Security needs Enhanced Application logging enabled and at minimum Traffic logs:\nhttps://docs.paloaltonetworks.com/iot/getting-started/prepare-your-firewall-for-iot-security\nThreat, WF and URL logs is enhancing the device secuirty for vulnerability evaluation.\nupvoted 2 times"
  },
  {
    "id": 27,
    "text": "Which two modes should be enabled on the GlobalProtect agent to allow a subset of users to connect directly to SaaS and\ninternal applications while allowing the remaining users to connect through third-party VPN? (Choose two.)",
    "options": {
      "A": "Remote desktop protocol (RDP)",
      "B": "Proxy",
      "C": "Tunnel",
      "D": "Clientless"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 28,
    "text": "In which security profile is credential phishing prevention implemented?",
    "options": {
      "A": "URL Filtering",
      "B": "Vulnerability Protection",
      "C": "Antivirus",
      "D": "Anti-spyware"
    },
    "answer": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": 29,
    "text": "How does PAN-OS identify App-IDs to perform application-layer inspection?",
    "options": {
      "A": "From predefined static rules based on IP addresses and ports configured by the administrator",
      "B": "From inspection of SSL certificates, cloud-based metadata, and manual application classification by the administrator",
      "C": "From periodic updates that categorize web traffic based on domain names, focusing on web-browsing activities",
      "D": "From multiple classification mechanisms - application signatures, application protocol decoding, and heuristics"
    },
    "answer": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": 30,
    "text": "Which GlobalProtect configuration is recommended for granular security enforcement of remote user device posture?",
    "options": {
      "A": "Applying log at session end to all GlobalProtect Security policies",
      "B": "Configuring host information profile (HIP) checks for all mobile users",
      "C": "Configuring a rule that blocks the ability of users to disable GlobalProtect while accessing internal applications",
      "D": "Implementing multi-factor authentication (MFA) for all users attempting to access internal applications"
    },
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 31,
    "text": "Which two features can a network administrator use to troubleshoot the issue of a Prisma Access mobile user who is unable to\naccess SaaS applications? (Choose two.)",
    "options": {
      "A": "Autonomous Digital Experience Manager (ADEM) console",
      "B": "Capacity Analyzer",
      "C": "Global Protect logs",
      "D": "SaaS Application Risk Portal"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 32,
    "text": "Which file type does Advanced WildFire support for inline analysis to detect advanced malware?",
    "options": {
      "A": "PE",
      "B": "APK → Android files are analyzed by WildFire, but not typically in inline mode.",
      "C": "PDF → Supported for analysis, but not the primary inline advanced malware enforcement type.",
      "D": "JAR → Java archives are analyzed, but again not the primary inline-supported format for Advanced WildFire detection."
    },
    "answer": [
      "A"
    ],
    "explanation": "0aaeb28 3 weeks ago\nSelected Answer: A\nThe correct answer is:\nA. PE\nWhy:\nAdvanced WildFire inline analysis is designed to inspect and block Windows Portable Executable (PE) files in real time.\nPE files (.exe, .dll) are the most common format used for Windows malware delivery, so they are a primary focus for inline deep learning and\nstatic/dynamic analysis in WildFire.\nThis inline capability allows immediate detection and prevention before the file is executed.\nWhy not the others:\nB. APK → Android files are analyzed by WildFire, but not typically in inline mode.\nC. PDF → Supported for analysis, but not the primary inline advanced malware enforcement type.\nD. JAR → Java archives are analyzed, but again not the primary inline-supported format for Advanced WildFire detection.\nupvoted 1 times\nDaniSerb 2 months, 1 week ago\nSelected Answer: A\nhttps://docs.paloaltonetworks.com/advanced-wildfire/administration/configure-advanced-wildfire-analysis/enable-advanced-wildfire-inline-cloud-\nanalysis\nPE is available for inline analysis\nupvoted 3 times\nDaniSerb 2 months, 1 week ago\n\"Only PE (portable executable) are supported at this time.\"\nupvoted 2 times\nedmuffins 2 months, 1 week ago\nSelected Answer: A\nhttps://docs.paloaltonetworks.com/advanced-wildfire\nupvoted 2 times"
  },
  {
    "id": 33,
    "text": "An administrator wants to implement additional Cloud-Delivered Security Services (CDSS) on a data center NGFW that already has\none enabled.\nWhat benefit does the NGFWs single-pass parallel processing (SP3) architecture provide?",
    "options": {
      "A": "It allows for traffic inspection at the application level.",
      "B": "There will be only a minor reduction in performance.",
      "C": "There will be no additional performance degradation.",
      "D": "It allows additional security inspection devices to be added inline."
    },
    "answer": [
      "C"
    ],
    "explanation": "PA_fan 1 week ago\nSelected Answer: B\nThe question mentions \"already has one\", and when you add multiple CDSS you face only a minor performance degradation\nupvoted 1 times\nDaniSerb 2 months, 1 week ago\nSelected Answer: C\nhttps://www.paloaltonetworks.com/resources/whitepapers/single-pass-parallel-processing-architecture#\nOur Single-Pass\nArchitecture provides:\n• No additional performance\noverhead when enabling additional\nfeatures.\n• Easy management of all threat\nprevention aspects of security\npolicy.\n• Simplified management through\nfewer consoles and functional\ngaps for more effective security\ncoverage.\n• Significantly lower total cost of\nownership.\nupvoted 2 times"
  },
  {
    "id": 34,
    "text": "What is the recommended upgrade path from PAN-OS 9.1 to PAN-OS 11.2?",
    "options": {
      "A": "9.1 --> 11.2",
      "B": "9.1 --> 11.0 --> 11.2",
      "C": "9.1 --> 10.0 --> 11.0 --> 11.2",
      "D": "9.1 --> 10.0 --> 11.0 --> 11.1 --> 11.2"
    },
    "answer": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 35,
    "text": "By default, how often are signatures updated for firewalls with Advanced WildFire?",
    "options": {
      "A": "In real time Most Voted",
      "B": "Within 5-10 minutes",
      "C": "Within 24-48 hours",
      "D": "Once a week"
    },
    "answer": [
      "B"
    ],
    "explanation": "DaniSerb 2 months, 1 week ago\nSelected Answer: A\nhttps://docs.paloaltonetworks.com/advanced-wildfire/administration/advanced-wildfire-overview/advanced-wildfire-concepts/advanced-wildfire-\nsignatures\nFirewalls with an active Advanced WildFire license can retrieve the latest Advanced WildFire signatures in real-time, as soon as they become available\nIf you do not have an Advanced WildFire subscription, signatures are made available within 24-48 hours as part of the antivirus update for firewalls\nwith an active Threat Prevention license.\nupvoted 3 times\nedmuffins 2 months, 1 week ago\nSelected Answer: A\nReal-Time Delivery: With the Advanced WildFire license and PAN-OS 10.0 or later, the firewall can be configured for a \"Real-time\" recurrence. This\nallows the device to pull specific signatures as soon as they are generated by the WildFire cloud, rather than waiting for a scheduled batch download\nupvoted 2 times"
  },
  {
    "id": 36,
    "text": "Which functionality does an NGFW use to determine whether new session setups are legitimate or illegitimate?",
    "options": {
      "A": "SYN bit",
      "B": "SYN flood protection",
      "C": "SYN cookies",
      "D": "Random Early Detection (RED)"
    },
    "answer": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 37,
    "text": "Which set of attributes is used by IoT Security to identify and classify appliances on a network when determining Device-ID?",
    "options": {
      "A": "IP address, network traffic patterns, device type",
      "B": "MAC address, device manufacturer, operating system",
      "C": "Hostname, application usage, encryption method",
      "D": "Device model, firmware version, user credential"
    },
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 38,
    "text": "How does a firewall behave when SSL Inbound Inspection is enabled?",
    "options": {
      "A": "It decrypts inbound and outbound SSH connections.",
      "B": "It acts as meddler-in-the-middle between the client and the internal server.",
      "C": "It acts transparently between the client and the internal server.",
      "D": "It decrypts traffic between the client and the external server."
    },
    "answer": [
      "B"
    ],
    "explanation": "edmuffins 2 months, 1 week ago\nSelected Answer: C\nWhen SSL Inbound Inspection is configured on a Palo Alto Networks firewall, it is used to inspect encrypted traffic coming from external clients\ndirected to your internal servers.\nTo do this, the administrator imports a copy of the internal server’s certificate and private key onto the firewall. Because the firewall has the private\nkey, it can transparently \"eavesdrop\" on the SSL/TLS session, decrypt the traffic, inspect it for threats, and forward the original encrypted packets to\nthe server. It does not act as a proxy or break the connection.\nupvoted 2 times\nd624435 1 month, 1 week ago\nThe answer C cannot be right, because it is not transparent when the firewall is encrypting traffic coming from external clients reaching internal with\nthe SSL-Cert and Key. You can run a unencrypted HTTP server in you backend and encrypt just inbound traffic.\nYou can also manipulate the requests with header insertion and perform PostQuantum ciphers (PQC) between client and firewall but keep legacy\nciphers internally.\nAnswer B is correct.\nupvoted 3 times"
  },
  {
    "id": 39,
    "text": "In a service provider environment, what key advantage does implementing virtual systems provide for managing multiple\ncustomer environments?",
    "options": {
      "A": "Shared threat prevention policies across all tenants",
      "B": "Centralized authentication for all customer domains",
      "C": "Unified logging across all virtual systems",
      "D": "Logical separation of control and Security policy"
    },
    "answer": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": 40,
    "text": "What are two indications that a packet has been processed into a fast path session? (Choose two.)",
    "options": {
      "A": "Content and application inspection is recognized.",
      "B": "Initial forwarding look is using a FIB.",
      "C": "Previous packets of the same session have been identified.",
      "D": "Security policy lookup is initiated."
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "edmuffins 2 months, 1 week ago\nSelected Answer: AC\nB (Initial forwarding look is using a FIB) and D (Security policy lookup is initiated) are exclusively slow path operations. They happen only for the first\npacket of a new session to determine where the packet should go and whether it is permitted to establish a connection. Once these are complete,\nsubsequent packets bypass these steps and go directly to the fast path.\nupvoted 1 times"
  },
  {
    "id": 41,
    "text": "Which two content updates can be pushed to NGFWs from Panorama? (Choose two.)",
    "options": {
      "A": "WildFire",
      "B": "Applications and threats",
      "C": "Advanced URL Filtering",
      "D": "GlobalProtect data file"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "blueturtle1700 1 month, 3 weeks ago\nSelected Answer: AB\nWildfire + Apps & Threats.\nURL is not a content update.\nhttps://docs.paloaltonetworks.com/pan-os/11-1/pan-os-upgrade/software-and-content-updates/dynamic-content-updates\nupvoted 3 times\nedmuffins 2 months, 1 week ago\nSelected Answer: AC\nPanorama allows administrators to centrally manage and deploy specific dynamic content updates to managed firewalls to ensure consistent security\nacross the deployment. According to Palo Alto Networks documentation, the primary content updates that Panorama can push to firewalls include:\nupvoted 1 times\nd624435 1 month, 1 week ago\nincluded is only: Antivirus, Application and Threats, Wildfire-Content and Wildfire\nAs well as GlobalProtect Agent and software packages\nupvoted 1 times"
  },
  {
    "id": 42,
    "text": "An administrator is responsible for updating which component of Prisma Access?",
    "options": {
      "A": "Management plane",
      "B": "Content updates",
      "C": "Data plane",
      "D": "VPN client"
    },
    "answer": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": 43,
    "text": "A Prisma Access administrator wants to attach the same set of Security policies to each new rule created.\nHow can the administrator automate the profiles to be attached to new rules?",
    "options": {
      "A": "Create profiles for each CDSS and name them \"default.\"",
      "B": "Create a security profile group and name it \"default.\"",
      "C": "Use AIOps to automate the security profile group attachment.",
      "D": "Use Policy Analyzer after creating the new rules."
    },
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 44,
    "text": "Which two components of a Security policy, when configured, allow third-party contractors access to internal applications outside\nbusiness hours? (Choose two.)",
    "options": {
      "A": "User-ID",
      "B": "Service",
      "C": "Schedule",
      "D": "App-ID"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 45,
    "text": "Which two features are supported when using traffic steering rules for remote network deployment on Prisma Access? (Choose\ntwo.)",
    "options": {
      "A": "Bidirectional Forwarding Detection (BFD)",
      "B": "External dynamic list",
      "C": "Remote desktop protocol (RDP)",
      "D": "Dynamic Address Group"
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": "AjaagTain 1 month, 3 weeks ago\nSelected Answer: BD\nB and D\nhttps://docs.paloaltonetworks.com/prisma-access/administration/prisma-access-advanced-deployments/service-connection-advanced-\ndeployments/use-traffic-forwarding-rules-with-service-connections/traffic-steering\nupvoted 2 times"
  },
  {
    "id": 46,
    "text": "Where does an administrator update the collection of infected hosts in Strata Cloud Manager (SCM) when isolating an identified\nendpoint from a network?",
    "options": {
      "A": "Quarantined device list",
      "B": "Quarantine devices",
      "C": "Actions",
      "D": "Host information profile (HIP)"
    },
    "answer": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": 47,
    "text": "How does Strata Logging Service help resolve ever-increasing log retention needs for a company using Prisma Access?",
    "options": {
      "A": "Log traffic using the licensed bandwidth purchased for Prisma Access reduces overhead.",
      "B": "Automatic selection of physical data storage regions decreases adoption time.",
      "C": "It scales to meet the capacity needs of new locations as business grows.",
      "D": "It increases resilience due to decentralized collection and storage of logs."
    },
    "answer": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 48,
    "text": "When physical ION devices are allocated, in which two states are they displayed on the Prisma SD-WAN web interface under\n\"Devices\"? (Choose two.)",
    "options": {
      "A": "Offline",
      "B": "Standby",
      "C": "Unclaimed",
      "D": "Needs attention"
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 49,
    "text": "Which step is necessary to ensure an organization is using the inline cloud analysis features in its Advanced Threat Prevention\nsubscription?",
    "options": {
      "A": "Update or create a new Anti-spyware security profile and enable the appropriate local deep learning models.",
      "B": "Enable SSL decryption in Security policies to inspect and analyze encrypted traffic for threats.",
      "C": "Disable anti-spyware to avoid performance impacts and rely solely on external threat intelligence.",
      "D": "Configure Advanced Threat Prevention profiles with default settings and only focus on high-risk traffic to avoid affecting"
    },
    "answer": [
      "B"
    ],
    "explanation": "edmuffins 2 months, 1 week ago\nSelected Answer: A\nA is correct because Advanced Threat Prevention (ATP) capabilities—such as inline cloud analysis and local deep learning for highly evasive\ncommand-and-control (C2) threats—are explicitly configured and enabled within the Anti-Spyware and Vulnerability Protection security profiles\n. To utilize these ATP features, an administrator must update or create these profiles, enable the specific machine learning/deep learning analysis\nengines (such as the HTTP/SSL Command and Control detectors), and attach the profile to a Security policy rule\n.\nupvoted 2 times"
  },
  {
    "id": 50,
    "text": "How do Cloud NGFW instances get created when using AWS centralized deployments?",
    "options": {
      "A": "A security VPC will be created as transit gateways to push all traffic through the area.",
      "B": "They are placed in a vWAN with a virtual hub.",
      "C": "Selected VPCs will have Cloud NGFW workloads added to them.",
      "D": "They replace the internet gateway service."
    },
    "answer": [
      "C"
    ],
    "explanation": "edmuffins 2 months, 1 week ago\nSelected Answer: A\nn Palo Alto Networks' Cloud NGFW for AWS, there are two primary deployment models:Centralized Deployment (Option A): A dedicated, central\n\"Security VPC\" is created. An AWS Transit Gateway (TGW) acts as a hub to route traffic from all your various spoke/application VPCs through this\nsingle Security VPC for inspection. This simplifies management because you don't have to deploy firewalls everywhere.Distributed Deployment\n(Option C): Cloud NGFW endpoints are added directly into the specific, selected application VPCs that need protection.\nupvoted 1 times"
  },
  {
    "id": 51,
    "text": "Why would a packet be processed through the slow path on an NGFW?",
    "options": {
      "A": "It does not require application identification or user identification.",
      "B": "It is part of an already established session.",
      "C": "It is part of a new or unestablished session.",
      "D": "It only needs basic NAT and Security policy enforcement."
    },
    "answer": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 52,
    "text": "A company has an ongoing initiative to monitor and control IT-sanctioned SaaS applications. To be successful, it will require\nconfiguration of decryption policies, along with data filtering and URL Filtering profiles used in Security policies.\nBased on the need to decrypt SaaS applications, which two steps are appropriate to ensure success? (Choose two.)",
    "options": {
      "A": "Validate which certificates will be used to establish trust.",
      "B": "Configure SSL Inbound Inspection.",
      "C": "Create new self-signed certificates to use for decryption.",
      "D": "Configure SSL Forward Proxy."
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": 53,
    "text": "Which security profile provides real-time protection against threat actors who exploit the misconfigurations of DNS infrastructure\nand redirect traffic to malicious domains?",
    "options": {
      "A": "Intelligent Run-time Memory Analysis",
      "B": "Machine learning (ML)",
      "C": "Dynamic analysis",
      "D": "Static analysis"
    },
    "answer": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": 54,
    "text": "Which security profile provides real-time protection against threat actors who exploit the misconfigurations of DNS infrastructure\nand redirect traffic to malicious domains?",
    "options": {
      "A": "Anti-spyware",
      "B": "URL Filtering",
      "C": "Antivirus",
      "D": "Vulnerability Protection"
    },
    "answer": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": 55,
    "text": "How many places will a firewall administrator need to create and configure a custom data loss prevention (DLP) profile across\nPrisma Access and the NGFW?",
    "options": {
      "A": "One",
      "B": "Two",
      "C": "Three",
      "D": "Four"
    },
    "answer": [
      "B"
    ],
    "explanation": "edmuffins 2 months, 1 week ago\nSelected Answer: A\nPalo Alto Networks Enterprise DLP is a unified, cloud-delivered service designed around a \"write once, apply everywhere\" model. An administrator\nonly needs to create and configure a custom DLP profile in one central management location (such as Strata Cloud Manager or Panorama).\nupvoted 2 times"
  },
  {
    "id": 56,
    "text": "Within which security profile is the DNS sinkholing action enabled?",
    "options": {
      "A": "File Blocking",
      "B": "Antivirus",
      "C": "Anti-spyware",
      "D": "DoS Protection"
    },
    "answer": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": 57,
    "text": "When a firewall acts as an application-level gateway (ALG), what does it require in order to establish a connection?",
    "options": {
      "A": "Dynamic IP and Port (DIPP)",
      "B": "Session Initiation Protocol (SIP)",
      "C": "Payload",
      "D": "Pinholes"
    },
    "answer": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": 58,
    "text": "Which two configurations are required when creating deployment profiles to migrate a perpetual VM-Series firewall to a flexible\nVM? (Choose two.)",
    "options": {
      "A": "Allow only the same security services as the perpetual VM.",
      "B": "Deploy virtual Panorama for management.",
      "C": "Choose \"Fixed vCPU Models\" for configuration type.",
      "D": "Allocate the same number of vCPUs as the perpetual VM."
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": 59,
    "text": "A firewall administrator wants to enable host information profiles (HIPs) to collect information from corporate hosts by using\nGlobalProtect.\nWhich two details will the administrator be able to collect from the host? (Choose two.)",
    "options": {
      "A": "WAN statistics",
      "B": "Antivirus definitions",
      "C": "Host memory consumption",
      "D": "Disk encryption"
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": 60,
    "text": "Which NGFW function can be used to enhance visibility, protect, block, and log the use of Post-quantum Cryptography (PQC)?",
    "options": {
      "A": "DNS Security profile",
      "B": "Decryption profile",
      "C": "Security policy",
      "D": "Decryption policy"
    },
    "answer": [
      "B"
    ],
    "explanation": ""
  }
];
