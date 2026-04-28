import { Question } from './types';

export const questions: Question[] = [
  {
    "id": 1,
    "text": "Which procedure is most effective for maintaining continuity and security during a Prisma Access data \nplane software upgrade?",
    "options": {
      "A": "Back up configurations, schedule upgrades during off-peak hours, and use a phased approach rather \nthan attempting a network-wide rollout.",
      "B": "Use Strata Cloud Manager (SCM) to perform dynamic upgrades automatically and simultaneously \nacross all locations at once to ensure network-wide uniformity.",
      "C": "Disable all security features during the upgrade to prevent conflicts and re-enable them after \ncompletion to ensure a smooth rollout process.",
      "D": "Perform the upgrade during peak business hours, quickly address any user-reported issues, and \nensure immediate troubleshooting post-rollout."
    },
    "answer": [
      "A"
    ],
    "explanation": "The best practice for Prisma Access data plane upgrades involves backing up configurations, scheduling \nupgrades during off-peak hours, and using a phased approach to minimize disruption and maintain \ncontinuity. \nAs per the Palo Alto Networks documentation: \n“To minimize disruptions, it is recommended to perform Prisma Access upgrades during non-business \nhours and in a phased manner, starting with less critical sites to validate the process before moving to \ncritical locations. Backup configurations and validate the system’s readiness to avoid data loss and \nmaintain service continuity.” \n(Source: Prisma Access Best Practices)"
  },
  {
    "id": 2,
    "text": "An NGFW administrator is updating PAN-OS on company data center firewalls managed by \nPanorama. \nPrior to installing the update, what must the administrator verify to ensure the devices will continue to be \nsupported by Panorama?",
    "options": {
      "A": "Device telemetry is enabled.",
      "B": "Panorama is configured as the primary device in the log collecting group for the data center firewalls.",
      "C": "All devices are in the same template stack.",
      "D": "Panorama is running the same or newer PAN-OS release as the one being installed."
    },
    "answer": [
      "D"
    ],
    "explanation": "The firewall must be running a PAN-OS version that is supported by Panorama. This means that \nPanorama must be running the same or a newer PAN-OS version as the one being installed on the \nfirewalls to maintain compatibility. \n“Before you upgrade the firewall, ensure that Panorama is running the same or a later PAN-OS version \nthan the firewall. Panorama must always be at the same or a higher version to maintain compatibility.” \n(Source: Panorama Admin Guide – Upgrade Process)"
  },
  {
    "id": 3,
    "text": "In which two applications can Prisma Access threat logs for mobile user traffic be reviewed? (Choose \ntwo.)",
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
    "explanation": "Threat logs for Prisma Access mobile users can be reviewed in both Strata Cloud Manager (SCM) and \nStrata Logging Service. Prisma Cloud and service connection firewalls are not directly tied to mobile user \ntraffic logs. \n“Prisma Access logs are available in the Strata Cloud Manager and can also be sent to the Strata \nLogging Service for detailed analysis and threat visibility.” \n(Source: Prisma Access Administration Guide)"
  },
  {
    "id": 4,
    "text": "Which two tools can be used to configure Cloud NGFWs for AWS? (Choose two.)",
    "options": {
      "A": "Cortex XSIAM",
      "B": "Prisma Cloud management console",
      "C": "Panorama",
      "D": "Cloud service provider's management console"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": "Cloud NGFW for AWS can be configured using Panorama for centralized management, as well as the \nAWS management console for native integration and configuration. \n“You can configure Cloud NGFW for AWS using Panorama for centralized security management, or \ndirectly through the AWS management console to deploy and manage security services for your AWS \nresources.” \n(Source: Cloud NGFW for AWS Guide)"
  },
  {
    "id": 5,
    "text": "Using Prisma Access, which solution provides the most security coverage of network protocols for the \nmobile workforce?",
    "options": {
      "A": "Explicit proxy",
      "B": "Client-based VPN",
      "C": "Enterprise browser",
      "D": "Clientless VPN"
    },
    "answer": [
      "B"
    ],
    "explanation": "Client-based VPN solutions like GlobalProtect provide full coverage for the mobile workforce by \nextending the enterprise security stack to remote endpoints. It establishes a secure tunnel, allowing \nconsistent security policies across the enterprise perimeter and the mobile workforce. \n“GlobalProtect is a client-based VPN that provides secure, consistent protection for mobile users by \nextending the security capabilities of Prisma Access to remote endpoints, covering all network protocols.” \n(Source: GlobalProtect Admin Guide)"
  },
  {
    "id": 6,
    "text": "Which two prerequisites must be evaluated when decrypting internet-bound traffic? (Choose two.)",
    "options": {
      "A": "RADIUS profile",
      "B": "Incomplete certificate chains",
      "C": "Certificate pinning",
      "D": "SAML certificate"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "When implementing SSL Forward Proxy decryption for outbound traffic, two key challenges that must be \nevaluated are: \nIncomplete certificate chains: This occurs when the firewall cannot validate the entire certificate chain for \na site, which may cause decryption failures. \nCertificate pinning: Applications like banking apps may use certificate pinning to prevent MITM (man-in-the-middle) attacks, and these applications will break if SSL Forward Proxy is used. \n“When decrypting outbound SSL traffic, you must consider incomplete certificate chains, which can \ncause decryption to fail if the firewall cannot validate the entire chain. Also, be aware of certificate \npinning in applications that prevents decryption by rejecting forged certificates.” \n(Source: Palo Alto Networks Decryption Concepts)"
  },
  {
    "id": 7,
    "text": "Which firewall attribute can an engineer use to simplify rule creation and automatically adapt to \nchanges in server roles or security posture based on log events?",
    "options": {
      "A": "Address objects",
      "B": "Dynamic Address Groups",
      "C": "Dynamic User Groups",
      "D": "Predefined IP addresses"
    },
    "answer": [
      "B"
    ],
    "explanation": "Dynamic Address Groups enable the firewall to automatically adjust security policies based on tags \nassigned dynamically (via log events, API, etc.). This eliminates the need for manual updates to policies \nwhen server roles or IPs change. \n“Dynamic Address Groups allow you to create policies that automatically adapt to changes in the \nenvironment. These groups are populated dynamically based on tags, enabling automated security \npolicy updates without manual intervention.” \n(Source: Dynamic Address Groups)"
  },
  {
    "id": 8,
    "text": "How does a firewall behave when SSL Inbound Inspection is enabled?",
    "options": {
      "A": "It acts transparently between the client and the internal server.",
      "B": "It decrypts inbound and outbound SSH connections.",
      "C": "It decrypts traffic between the client and the external server.",
      "D": "It acts as meddler-in-the-middle between the client and the internal server."
    },
    "answer": [
      "D"
    ],
    "explanation": "SSL Inbound Inspection allows the firewall to decrypt incoming encrypted traffic to internal servers (e.g., \nweb servers) by acting as a man-in-the-middle (MITM). The firewall uses the private key of the server to \ndecrypt the session and apply security policies before re-encrypting the traffic. \n“SSL Inbound Inspection requires you to import the server’s private key and certificate into the firewall. \nThe firewall then acts as a man-in-the-middle (MITM) to decrypt inbound sessions from external clients \nto internal servers for inspection.” \n(Source: SSL Inbound Inspection)"
  },
  {
    "id": 9,
    "text": "When a firewall acts as an application-level gateway (ALG), what does it require in order to establish a \nconnection?",
    "options": {
      "A": "Dynamic IP and Port (DIPP)",
      "B": "Payload",
      "C": "Session Initiation Protocol (SIP)",
      "D": "Pinholes"
    },
    "answer": [
      "B"
    ],
    "explanation": "An ALG is designed to inspect and modify the payload of application-layer protocols (like SIP, FTP, etc.) \nto manage dynamic port allocations and session information. \n“Application Layer Gateways (ALGs) inspect the payload of certain protocols to dynamically manage \nsessions that use dynamic port assignments. By modifying payloads, the ALG ensures that NAT and \nsecurity policies are correctly applied.” \n(Source: ALG Support)"
  },
  {
    "id": 10,
    "text": "Which security profile provides real-time protection against threat actors who exploit the \nmisconfigurations of DNS infrastructure and redirect traffic to malicious domains?",
    "options": {
      "A": "Antivirus",
      "B": "URL Filtering",
      "C": "Vulnerability Protection",
      "D": "Anti-spyware"
    },
    "answer": [
      "D"
    ],
    "explanation": "The Anti-spyware profile includes DNS-based protections like sinkholing and detection of DNS queries to \nmalicious domains, offering real-time protection against attacks that exploit DNS misconfigurations. \n“The Anti-Spyware profile protects against DNS-based threats by sinkholing DNS queries to malicious \ndomains and detecting suspicious DNS activity, thus blocking data exfiltration and C2 communication.” \n(Source: Anti-Spyware Profiles)"
  },
  {
    "id": 11,
    "text": "Which method in the WildFire analysis report detonates unknown submissions to provide visibility into \nreal-world effects and behavior?",
    "options": {
      "A": "Dynamic analysis",
      "B": "Static analysis",
      "C": "Intelligent Run-time Memory Analysis",
      "D": "Machine learning (ML)"
    },
    "answer": [
      "A"
    ],
    "explanation": "Dynamic analysis in WildFire refers to executing unknown files in a controlled environment (sandbox) to \nobserve their real-world behavior. This allows the firewall to detect zero-day threats and advanced \nmalware by directly analyzing the file’s impact on a system. \n“WildFire dynamic analysis detonates unknown files in a secure sandbox environment, analyzing real-world effects, behaviors, and potential malicious activity.” \n(Source: WildFire Analysis)"
  },
  {
    "id": 12,
    "text": "How many places will a firewall administrator need to create and configure a custom data loss \nprevention (DLP) profile across Prisma Access and the NGFW?",
    "options": {
      "A": "One",
      "B": "Two",
      "C": "Three",
      "D": "Four"
    },
    "answer": [
      "A"
    ],
    "explanation": "Palo Alto Networks' Enterprise DLP uses a centralized DLP profile that can be applied consistently \nacross both Prisma Access and NGFWs using Strata Cloud Manager (SCM). This eliminates the need \nfor duplicating efforts across multiple locations. \n“Enterprise DLP profiles are created and managed centrally through the Cloud Management Interface \nand can be used seamlessly across NGFW and Prisma Access deployments.” \n(Source: Enterprise DLP Overview)"
  },
  {
    "id": 13,
    "text": "A cloud security architect is designing a certificate management strategy for Strata Cloud Manager \n(SCM) across hybrid environments. \nWhich practice ensures optimal security with low management overhead?",
    "options": {
      "A": "Deploy centralized certificate automation with standardized protocols and continuous monitoring.",
      "B": "Implement separate certificate authorities with independent validation rules for each cloud \nenvironment.",
      "C": "Configure manual certificate deployment with quarterly reviews and environment-specific security \nprotocols.",
      "D": "Use cloud provider default certificates with scheduled synchronization and localized renewal \nprocesses."
    },
    "answer": [
      "A"
    ],
    "explanation": "A centralized certificate automation approach reduces management overhead and security risks by \nstandardizing processes, automating renewals, and continuously monitoring the certificate lifecycle. \n“Implementing a centralized certificate management approach with automation and continuous \nmonitoring ensures optimal security while reducing operational complexity in hybrid environments.” \n(Source: Best Practices for Certificate Management)"
  },
  {
    "id": 14,
    "text": "Which set of practices should be implemented with Cloud Access Security Broker (CASB) to ensure \nrobust data encryption and protect sensitive information in SaaS applications?",
    "options": {
      "A": "Do not enable encryption for data-at-rest to improve performance.",
      "B": "Use default encryption keys provided by the SaaS provider.",
      "C": "Perform annual encryption key rotations.",
      "D": "Enable encryption for data-at-rest and in transit, regularly update encryption keys, and use strong \nencryption algorithms."
    },
    "answer": [
      "D"
    ],
    "explanation": "CASB integration should focus on comprehensive data protection, which includes encryption for data-at-rest and in transit, frequent key updates, and using strong encryption algorithms to ensure confidentiality \nand data integrity. \n“CASB solutions should enforce encryption for data-at-rest and in transit, implement key rotation policies, \nand leverage robust encryption algorithms to protect sensitive SaaS application data.” \n(Source: CASB Deployment Best Practices)"
  },
  {
    "id": 15,
    "text": "How does Strata Logging Service help resolve ever-increasing log retention needs for a company \nusing Prisma Access?",
    "options": {
      "A": "It increases resilience due to decentralized collection and storage of logs.",
      "B": "Automatic selection of physical data storage regions decreases adoption time.",
      "C": "It can scale to meet the capacity needs of new locations as business grows.",
      "D": "Log traffic using the licensed bandwidth purchased for Prisma Access reduces overhead."
    },
    "answer": [
      "C"
    ],
    "explanation": "The Strata Logging Service offers scalable log storage to accommodate data growth, which ensures \norganizations can retain logs for compliance and threat hunting as their environments expand. \n“The Strata Logging Service is designed to scale dynamically to accommodate growing log retention \nneeds, allowing enterprises to maintain comprehensive visibility as they expand their network footprint.” \n(Source: Strata Logging Service Overview)"
  },
  {
    "id": 16,
    "text": "After a firewall is associated with Strata Cloud Manager (SCM), which two additional actions are \nrequired to enable management of the firewall from SCM? (Choose two.)",
    "options": {
      "A": "Deploy a service connection for each branch site and connect with SCM.",
      "B": "Configure NTP and DNS servers for the firewall.",
      "C": "Configure a Security policy allowing “stratacloudmanager.paloaltonetworks.com” for all users.",
      "D": "Install a device certificate."
    },
    "answer": [
      "B",
      "D"
    ],
    "explanation": "To fully manage a firewall from Strata Cloud Manager (SCM), it’s essential to establish trust and ensure \nreliable connectivity: \nConfigure NTP and DNS servers \nThe firewall must have accurate time (NTP) and name resolution (DNS) to securely communicate with \nSCM and related cloud services. \n“To ensure successful management, configure the firewall’s NTP and DNS settings to synchronize time \nand resolve domain names such as stratacloudmanager.paloaltonetworks.com.” \n(Source: SCM Onboarding Requirements) \nInstall a device certificate \nA device certificate authenticates the firewall’s identity when connecting to SCM. \n“The device certificate authenticates the firewall to Palo Alto Networks cloud services, including SCM. It’s \na fundamental requirement to establish secure connectivity.” \n(Source: Device Certificates) \nThese steps ensure trust, secure communication, and successful onboarding into SCM."
  },
  {
    "id": 17,
    "text": "How does Advanced WildFire integrate into third-party applications?",
    "options": {
      "A": "Through playbooks automatically sending WildFire data",
      "B": "Through customized reporting configured in NGFWs",
      "C": "Through Strata Logging Service",
      "D": "Through the WildFire API"
    },
    "answer": [
      "D"
    ],
    "explanation": "Advanced WildFire supports direct integrations into third-party security tools through the WildFire API, \nenabling automated threat intelligence sharing and real-time verdict dissemination. \n“WildFire exposes a RESTful API that third-party applications can leverage to integrate WildFire’s \nanalysis results and threat intelligence seamlessly into their own security workflows.” \n(Source: WildFire API Guide) \nThe API provides: \nVerdict retrieval \nSample submission \nReport retrieval \n“Use the WildFire API to submit samples, retrieve verdicts, and obtain detailed analysis reports for \nintegration with your existing security infrastructure.” \n(Source: WildFire API Use Cases)"
  },
  {
    "id": 18,
    "text": "Which two SSH Proxy decryption profile settings should be configured to enhance the company’s \nsecurity posture? (Choose two.)",
    "options": {
      "A": "Block sessions when certificate validation fails.",
      "B": "Allow sessions with legacy SSH protocol versions.",
      "C": "Block connections that use non-compliant SSH versions.",
      "D": "Allow sessions when decryption resources are unavailable."
    },
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Blocking non-compliant SSH versions and failing certificate validations are fundamental security \nmeasures: \nBlock sessions when certificate validation fails \n“The SSH Proxy profile should block sessions that fail certificate validation to ensure that only trusted \nhosts are allowed.” \n(Source: SSH Proxy Decryption Best Practices) \nBlock connections using non-compliant SSH versions \nOlder SSH versions may have vulnerabilities or lack modern encryption algorithms. \n“To enforce stronger security, block SSH sessions that use older or deprecated versions of the SSH \nprotocol that do not comply with your security posture.” \n(Source: SSH Decryption and Best Practices) \nTogether, these measures minimize the risk of MITM attacks and secure SSH traffic."
  },
  {
    "id": 19,
    "text": "A network security engineer has created a Security policy in Prisma Access that includes a negated \nregion in the source address. \nWhich configuration will ensure there is no connectivity loss due to the negated region?",
    "options": {
      "A": "Set the service to be application-default.",
      "B": "Create a Security policy for the negated region with destination address “any”.",
      "C": "Add a Dynamic Application Group to the Security policy.",
      "D": "Add all regions that contain private IP addresses to the source address."
    },
    "answer": [
      "B"
    ],
    "explanation": "Negated source addresses exclude traffic from the specified region. To avoid accidental connectivity loss \nfor traffic from that region, create a separate Security policy to explicitly permit it. \n“When you use a negated region in a Security policy rule, ensure to create an additional Security policy \nto permit traffic from the excluded (negated) region to avoid unintentional drops.” \n(Source: Prisma Access Policy Best Practices) \nThis ensures explicit inclusivity for the excluded region, maintaining reliable connectivity."
  },
  {
    "id": 20,
    "text": "What is a necessary step for creation of a custom Prisma Access report on Strata Cloud Manager \n(SCM)?",
    "options": {
      "A": "Open a support ticket.",
      "B": "Set up Cloud Identity Engine.",
      "C": "Generate a PDF summary report.",
      "D": "Configure a dashboard."
    },
    "answer": [
      "D"
    ],
    "explanation": "To create custom Prisma Access reports within SCM, you first configure a dashboard that aggregates the \nrelevant logs and analytics. This allows you to define the data points you want to include. \n“Dashboards in SCM can be customized to include Prisma Access data sources, enabling you to create \nand generate reports that meet specific business and security requirements.” \n(Source: SCM Dashboards and Reporting) \nOnce configured, you can export the dashboard as a custom report. \n“Use the dashboard’s data visualization to create custom reports for Prisma Access, which can be \nexported as PDFs for distribution.” \n(Source: SCM Report Customization)"
  },
  {
    "id": 21,
    "text": "Which NGFW function can be used to enhance visibility, protect, block, and log the use of Post-quantum Cryptography (PQC)?",
    "options": {
      "A": "DNS Security profile",
      "B": "Decryption policy",
      "C": "Security policy",
      "D": "Decryption profile"
    },
    "answer": [
      "B"
    ],
    "explanation": "A decryption policy allows the firewall to inspect encrypted traffic and apply security controls to Post-quantum Cryptography (PQC) usage, as PQC algorithms are typically implemented within encrypted \nsessions. \n“Decryption policies enable the firewall to see and control encrypted traffic. This visibility and control \nextend to new cryptographic algorithms, including PQC, to ensure that security measures are applied \nconsistently.” \n(Source: Palo Alto Networks Decryption Overview) \nBy decrypting sessions, you ensure that even PQC traffic can be inspected, logged, and subject to \nsecurity profiles for visibility and policy enforcement."
  },
  {
    "id": 22,
    "text": "What is the recommended upgrade path from PAN-OS 9.1 to PAN-OS 11.2?",
    "options": {
      "A": "9.1 -> 11.0 -> 11.2",
      "B": "9.1 -> 10.0 -> 11.",
      "C": "9.1 -> 11.",
      "D": "9.1 -> 10.0 -> 11.2"
    },
    "answer": [
      "D"
    ],
    "explanation": "Palo Alto Networks requires upgrading to the next major feature release before moving to newer \nreleases. This ensures stability and compatibility. \n“When upgrading across multiple major PAN-OS releases, you must upgrade to each intermediate major \nfeature release. Skipping major releases is not supported.” \n(Source: Upgrade Considerations) \nFor PAN-OS 9.1 -> 11.2, the proper path is:"
  },
  {
    "id": 23,
    "text": "Which two features can a network administrator use to troubleshoot the issue of a Prisma Access \nmobile user who is unable to access SaaS applications? (Choose two.)",
    "options": {
      "A": "SaaS Application Risk Portal",
      "B": "Capacity Analyzer",
      "C": "GlobalProtect logs",
      "D": "Autonomous Digital Experience Manager (ADEM) console"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": "GlobalProtect logs \nThese logs provide detailed insights into the user’s connectivity, tunnel status, and authentication events. \n“GlobalProtect logs include detailed information about connection establishment, tunnel negotiation, and \nany errors that can prevent mobile users from accessing applications.” \n(Source: GlobalProtect Troubleshooting) \nAutonomous Digital Experience Management (ADEM) \nADEM helps visualize end-to-end performance and identifies network issues affecting SaaS app access \nfor mobile users. \n“ADEM provides real-time and historical visibility into user experience, enabling quick identification and \nresolution of connectivity or performance issues for SaaS applications.” \n(Source: ADEM for Prisma Access)"
  },
  {
    "id": 24,
    "text": "Which two content updates can be pushed to next-generation firewalls from Panorama? (Choose \ntwo.)",
    "options": {
      "A": "Advanced URL Filtering",
      "B": "Applications and threats",
      "C": "WildFire",
      "D": "GlobalProtect data file"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Applications and threats \nPanorama can push application and threat signature updates to managed firewalls, ensuring consistent \napplication and threat visibility. \n“Panorama uses dynamic updates to distribute the latest application and threat signature packs to all \nmanaged firewalls.” \n(Source: Manage Content Updates in Panorama) \nWildFire \nPanorama also distributes WildFire signature updates to firewalls for real-time malware detection. \n“WildFire updates provide the latest malware signatures to enhance detection and prevention, and can \nbe deployed to all managed firewalls via Panorama.” \n(Source: WildFire and Dynamic Updates)"
  },
  {
    "id": 25,
    "text": "A network administrator obtains Palo Alto Networks Advanced Threat Prevention and Advanced DNS \nSecurity subscriptions for edge NGFWs and is setting up security profiles. \nWhich step should be included in the initial configuration of the Advanced DNS Security service?",
    "options": {
      "A": "Create a decryption policy rule to decrypt DNS-over-TLS / port 853 traffic.",
      "B": "Create overrides for all company owned FQDNs.",
      "C": "Configure DNS Security signature policy settings to sinkhole malicious DNS queries.",
      "D": "Enable Advanced Threat Prevention with default settings and only focus on high-risk traffic."
    },
    "answer": [
      "C"
    ],
    "explanation": "Advanced DNS Security uses a signature policy to sinkhole malicious DNS queries and prevent them \nfrom resolving. \n“The DNS Security service integrates with Anti-Spyware profiles, and you must configure signature policy \nsettings to sinkhole malicious queries. This proactively stops traffic to known malicious domains.” \n(Source: Configure DNS Security) \nSinkholing ensures that DNS queries to malicious FQDNs are redirected to a safe IP, preventing \ncompromise."
  },
  {
    "id": 26,
    "text": "What must be configured to successfully onboard a Prisma Access remote network using Strata \nCloud Manager (SCM)?",
    "options": {
      "A": "Cloud Identity Engine",
      "B": "Autonomous Digital Experience Manager (ADEM)",
      "C": "GlobalProtect agent",
      "D": "IPSec termination node"
    },
    "answer": [
      "D"
    ],
    "explanation": "To connect a remote network to Prisma Access via Strata Cloud Manager (SCM), the remote network \nrequires an IPSec termination node. This acts as the VPN endpoint, ensuring secure connectivity \nbetween branch locations and Prisma Access. \n“To onboard a remote network, configure the IPSec termination node on the customer’s premises. This \nVPN endpoint establishes the secure tunnel to Prisma Access for traffic backhauling.” \n(Source: Onboard Remote Networks) \nKey takeaway: \nThe IPSec termination node is fundamental for secure, encrypted connectivity."
  },
  {
    "id": 27,
    "text": "In a Prisma SD-WAN environment experiencing voice quality degradation, which initial action is \nrecommended?",
    "options": {
      "A": "Immediately modify path quality thresholds.",
      "B": "Review real-time analytics of path performance.",
      "C": "Switch all VoIP traffic to backup paths.",
      "D": "Request an RMA of the ION devices."
    },
    "answer": [
      "B"
    ],
    "explanation": "Voice quality issues in SD-WAN deployments are typically linked to path performance metrics (latency, \njitter, packet loss). Reviewing real-time analytics helps pinpoint root causes and appropriate mitigation. \n“When experiencing performance issues, the first step is to analyze real-time performance data. Prisma \nSD-WAN provides path quality analytics to identify degradation and ensure informed troubleshooting.” \n(Source: Prisma SD-WAN Monitoring) \nThis data-driven approach avoids unnecessary configuration changes."
  },
  {
    "id": 28,
    "text": "Which action optimizes user experience across a segmented network architecture and implements \nthe most effective method to maintain secure connectivity between branch and campus locations?",
    "options": {
      "A": "Establish site-to-site tunnels on each branch and campus firewall and have individual VLANs for each \ndepartment.",
      "B": "Configure all branch and campus firewalls to use a single shared broadcast domain.",
      "C": "Implement SD-WAN to route all traffic based on network performance metrics and use zone \nprotection profiles.",
      "D": "Configure a single campus firewall to handle the routing of all branch traffic."
    },
    "answer": [
      "C"
    ],
    "explanation": "SD-WAN solutions optimize application experience and provide secure, dynamic connectivity across \ndistributed locations by leveraging real-time path metrics (latency, jitter, loss). \n“By implementing SD-WAN, traffic is routed intelligently based on real-time network performance metrics. \nZone protection profiles ensure security while maximizing application performance.” \n(Source: SD-WAN Architecture) \nKey advantage: \nSecure connectivity and best user experience across campuses and branches."
  },
  {
    "id": 29,
    "text": "When configuring Security policies on VM-Series firewalls, which set of actions will ensure the most \ncomprehensive Security policy enforcement?",
    "options": {
      "A": "Configure port-based policies, check threat logs weekly, conduct software updates annually, and \nenable decryption.",
      "B": "Configure policies using User-ID and App-ID, enable decryption, apply appropriate security profiles to \nrules, and update regularly with dynamic updates.",
      "C": "Configure all default policies provided by the firewall, use Policy Optimizer, and adjust security rules \nafter an incident occurs.",
      "D": "Configure a block policy for all malicious inbound traffic, configure an allow policy for all outbound \ntraffic, and update regularly with dynamic updates."
    },
    "answer": [
      "B"
    ],
    "explanation": "A comprehensive security approach uses: \nUser-ID for identity-based policies \nApp-ID for application-based security \nDecryption to inspect encrypted traffic \nSecurity profiles to enforce protections \nDynamic updates to ensure up-to-date threat coverage \n“For comprehensive security, combine User-ID, App-ID, decryption, and security profiles. Keep the \nfirewall updated with dynamic content updates to maintain the strongest security posture.” \n(Source: Best Practices for Security Policy) \nThis ensures real-time, identity-aware, and application-centric security enforcement."
  },
  {
    "id": 30,
    "text": "Which functionality does an NGFW use to determine whether new session setups are legitimate or \nillegitimate?",
    "options": {
      "A": "SYN bit",
      "B": "SYN cookies",
      "C": "Random Early Detection (RED)",
      "D": "SYN flood protection"
    },
    "answer": [
      "B"
    ],
    "explanation": "To prevent SYN flood attacks, the NGFW uses SYN cookies to validate legitimate session establishment. \n“SYN cookies allow the firewall to verify the legitimacy of new session requests without allocating \nresources until the handshake is completed. This prevents SYN flood attacks from exhausting system \nresources.” \n(Source: Flood Protection Best Practices) \nSYN cookies mitigate resource exhaustion by ensuring only legitimate connections are established."
  },
  {
    "id": 31,
    "text": "Which two security services are required for configuration of NGFW Security policies to protect \nagainst malicious and misconfigured domains? (Choose two.)",
    "options": {
      "A": "Advanced Threat Prevention",
      "B": "SaaS Security",
      "C": "Advanced WildFire",
      "D": "Advanced DNS Security"
    },
    "answer": [
      "A",
      "D"
    ],
    "explanation": "Protecting against malicious and misconfigured domains requires two critical services: \nAdvanced Threat Prevention \nProvides signature-based and advanced analysis to identify threats, including DNS-based attacks. \n“Advanced Threat Prevention enables the NGFW to detect and prevent exploits and malware-based \ncommunications, including those leveraging DNS.” \n(Source: Advanced Threat Prevention) \nAdvanced DNS Security \nSpecifically designed to detect and sinkhole malicious and misconfigured DNS queries. \n“DNS Security uses real-time intelligence to block DNS-based threats, protect against data exfiltration, \nand automatically sinkhole suspicious domain lookups.” \n(Source: DNS Security) \nBy combining these services in security policies, NGFWs ensure robust protection against domain-based \nthreats and misconfigurations."
  },
  {
    "id": 32,
    "text": "Which step is necessary to ensure an organization is using the inline cloud analysis features in its \nAdvanced Threat Prevention subscription?",
    "options": {
      "A": "Disable anti-spyware to avoid performance impacts and rely solely on external threat intelligence.",
      "B": "Enable SSL decryption in Security policies to inspect and analyze encrypted traffic for threats.",
      "C": "Update or create a new anti-spyware security profile and enable the appropriate local deep learning \nmodels.",
      "D": "Configure Advanced Threat Prevention profiles with default settings and only focus on high-risk traffic \nto avoid affecting network performance."
    },
    "answer": [
      "C"
    ],
    "explanation": "To fully leverage inline cloud analysis in Advanced Threat Prevention, security profiles (e.g., anti-spyware) must be updated or newly created to enable local deep learning and inline cloud analysis \nmodels. \n“To activate inline cloud analysis, update your Anti-Spyware profile to enable advanced inline detection \nengines, including deep learning-based models and cloud-delivered signatures.” \n(Source: Inline Cloud Analysis and Deep Learning) \nThis ensures real-time protection from sophisticated threats beyond static signatures."
  },
  {
    "id": 33,
    "text": "Which zone is available for use in Prisma Access?",
    "options": {
      "A": "Clientless VPN",
      "B": "Interzone",
      "C": "Intrazone",
      "D": "DMZ"
    },
    "answer": [
      "B"
    ],
    "explanation": "In Prisma Access, the interzone security policy rule is available and plays a crucial role in controlling \ntraffic between zones. \n“You can configure an interzone rule to control traffic that flows between different zones in Prisma \nAccess, enabling granular security policy enforcement.” \n(Source: Prisma Access Security Policies) \nThis ensures comprehensive control of traffic crossing security boundaries in the cloud-delivered \narchitecture."
  },
  {
    "id": 34,
    "text": "Which offering can be managed in both Panorama and Strata Cloud Manager (SCM)?",
    "options": {
      "A": "Autonomous Digital Experience Manager (ADEM)",
      "B": "VM-Series Next-Generation Firewall (NGFW)",
      "C": "Prisma SD-WAN",
      "D": "SaaS Security"
    },
    "answer": [
      "B"
    ],
    "explanation": "The VM-Series NGFWs are designed to integrate seamlessly with both Panorama and Strata Cloud \nManager (SCM), allowing administrators to manage physical and virtual firewall deployments from either \ninterface. \n“You can manage VM-Series Next-Generation Firewalls using either Panorama for centralized \nmanagement of all firewalls or Strata Cloud Manager for cloud-based management, giving flexibility \nacross hybrid environments.” \n(Source: VM-Series Management Options) \nUnified management flexibility is key for enterprises with hybrid or multi-cloud deployments."
  },
  {
    "id": 35,
    "text": "Which component of NGFW is supported in active/passive design but not in active/active design?",
    "options": {
      "A": "Single floating IP address",
      "B": "Using a DHCP client",
      "C": "Route-based redundancy",
      "D": "Configuring ARP load-sharing on Layer 3"
    },
    "answer": [
      "A"
    ],
    "explanation": "Single floating IP address (also known as a floating IP or shared IP) is supported only in an \nactive/passive HA pair. In active/active HA, both firewalls are forwarding traffic simultaneously and thus \ndo not share a single floating IP. \n“In active/passive HA, a single floating IP address is used for seamless failover. Active/active HA requires \nseparate IP addresses and does not support a single floating IP.” \n(Source: Active/Passive vs. Active/Active HA) \nThis simplifies failover in active/passive deployments by using a single shared IP that moves to the \nactive peer upon failover."
  },
  {
    "id": 36,
    "text": "What key capability distinguishes Content-ID technology from conventional network security \napproaches?",
    "options": {
      "A": "It performs packet header analysis short of deep packet inspection.",
      "B": "It provides single-pass application layer inspection for real-time threat prevention.",
      "C": "It exclusively monitors network traffic volumes.",
      "D": "It relies primarily on reputation-based filtering."
    },
    "answer": [
      "B"
    ],
    "explanation": "Content-ID is the core of Palo Alto Networks' prevention architecture, providing single-pass application \nlayer inspection to deliver real-time threat prevention across all traffic. \n“Content-ID uses a single-pass architecture to perform application-layer (Layer 7) traffic inspection \nand real-time threat prevention. Unlike traditional firewalls that rely on multiple scans, Content-ID \ninspects traffic once to enforce multiple security controls simultaneously.” \n(Source: Content-ID Overview) \nBy consolidating security functions in a single pass, it ensures both efficiency and comprehensive \nsecurity."
  },
  {
    "id": 37,
    "text": "In a distributed enterprise implementing Prisma SD-WAN, which configuration element should be \nimplemented first to ensure optimal traffic flow between remote sites and headquarters?",
    "options": {
      "A": "Deploy redundant ION devices at each location.",
      "B": "Implement dynamic path selection using real-time performance metrics.",
      "C": "Configure static routes between all the branch offices.",
      "D": "Enable split tunneling for all branch locations."
    },
    "answer": [
      "B"
    ],
    "explanation": "Dynamic path selection is the foundation of SD-WAN, leveraging real-time performance data to \ndynamically route traffic over the best available path. \n“Dynamic path selection continuously monitors performance metrics (loss, latency, jitter) and makes real-time routing decisions to ensure application SLAs are met across the WAN.” \n(Source: Prisma SD-WAN Dynamic Path Selection) \nEstablishing dynamic path selection first ensures the rest of the SD-WAN optimizations (e.g., failover, \nQoS) work effectively."
  },
  {
    "id": 38,
    "text": "Which two components of a Security policy, when configured, allow third-party contractors access to \ninternal applications outside business hours? (Choose two.)",
    "options": {
      "A": "App-ID",
      "B": "Service",
      "C": "User-ID",
      "D": "Schedule"
    },
    "answer": [
      "C",
      "D"
    ],
    "explanation": "To allow third-party contractors controlled access, security policies must combine user identification and \ntime-based access controls: \nUser-ID \n“User-ID enables security policies to be based on user identity rather than IP addresses, ensuring \nprecise policy enforcement for specific users such as contractors.” \n(Source: User-ID Overview) \nSchedule \n“Schedules allow policies to be active only during specific times, providing time-based access control \n(e.g., after business hours).” \n(Source: Security Policy Schedules) \nTogether, they ensure that only authorized users (contractors) have access, and only when explicitly \nallowed."
  },
  {
    "id": 39,
    "text": "A company has an ongoing initiative to monitor and control IT-sanctioned SaaS applications. To be \nsuccessful, it will require configuration of decryption policies, along with data filtering and URL Filtering \nProfiles used in Security policies. \nBased on the need to decrypt SaaS applications, which two steps are appropriate to ensure success? \n(Choose two.)",
    "options": {
      "A": "Configure SSL Forward Proxy.",
      "B": "Validate which certificates will be used to establish trust.",
      "C": "Configure SSL Inbound Inspection.",
      "D": "Create new self-signed certificates to use for decryption."
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "To inspect SaaS app traffic (often encrypted), you must configure: \nSSL Forward Proxy \n“The SSL Forward Proxy decryption profile enables the firewall to decrypt outbound SSL traffic, essential \nfor visibility into SaaS app usage.” \n(Source: SSL Forward Proxy Overview) \nValidate certificates \n“Validating and deploying the appropriate root and intermediate CA certificates is critical for establishing \ntrust and preventing SSL errors during decryption.” \n(Source: Certificate Deployment and Validation) \nWithout these steps, SaaS decryption and policy enforcement would be incomplete."
  },
  {
    "id": 40,
    "text": "A network security engineer wants to forward Strata Logging Service data to tools used by the \nSecurity Operations Center (SOC) for further investigation. \nIn which best practice step of Palo Alto Networks Zero Trust does this fit?",
    "options": {
      "A": "Map and Verify Transactions",
      "B": "Implementation",
      "C": "Standards and Designs",
      "D": "Report and Maintenance"
    },
    "answer": [
      "D"
    ],
    "explanation": "The “Report and Maintenance” step of the Zero Trust model emphasizes ongoing monitoring, analysis, \nand reporting to ensure the environment remains secure over time. \n“The Report and Maintenance phase includes continuous monitoring, log forwarding, and sharing of \nsecurity telemetry to third-party tools to maintain and validate Zero Trust implementation.” \n(Source: Zero Trust Best Practices) \nBy forwarding logs to SOC tools, the engineer ensures comprehensive visibility and proactive threat \nhunting."
  },
  {
    "id": 41,
    "text": "A network engineer pushes specific Panorama reports of new AI URL category types to branch \nNGFWs. \nWhich two report types achieve this goal? (Choose two.)",
    "options": {
      "A": "SNMP",
      "B": "Custom",
      "C": "PDF summary",
      "D": "CSV export"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Panorama allows engineers to create custom reports and generate PDF summary formats for consistent \nreporting across NGFWs. \nCustom Reports \n“Custom Reports provide tailored reporting based on URL categories, application usage, and threat \nvisibility. They are generated within Panorama and can include data on newly categorized AI URL types.” \n(Source: Panorama Reports) \nPDF Summaries \n“You can generate PDF summary reports to distribute these insights across branch firewalls, providing \nan easy-to-read format for compliance and operational review.” \n(Source: Export Reports as PDF) \nTogether, these options provide a consistent, standardized method to push insights about AI-based URL \ncategories to branch devices."
  },
  {
    "id": 42,
    "text": "Which subscription sends non-file format-based traffic that matches Data Filtering Profile criteria to a \ncloud service to render a verdict?",
    "options": {
      "A": "Enterprise DLP",
      "B": "Advanced URL Filtering",
      "C": "SaaS Security Inline",
      "D": "Advanced WildFire"
    },
    "answer": [
      "A"
    ],
    "explanation": "Enterprise DLP uses cloud analysis to inspect and classify sensitive data in non-file-based formats (e.g., \nin-line data streams, SaaS communications). \n“Enterprise DLP inspects data in non-file-based traffic flows, forwarding suspicious data patterns to the \ncloud for classification and verdicts.” \n(Source: Enterprise DLP Overview) \nThe other services focus on file-based scanning (WildFire), URL access control (Advanced URL \nFiltering), or inline SaaS application controls (SaaS Security Inline)."
  },
  {
    "id": 43,
    "text": "How are policies evaluated in the AWS management console when creating a Security policy for a \nCloud NGFW?",
    "options": {
      "A": "The administrator sets a rule order to determine the order in which they are evaluated.",
      "B": "They can be dragged up or down the stack as they are evaluated.",
      "C": "The administrator sets a rule priority to determine the order in which they are evaluated.",
      "D": "They must be created in the order they are intended to be evaluated."
    },
    "answer": [
      "D"
    ],
    "explanation": "Cloud NGFW Security Policies in the AWS Console are evaluated in the exact creation order – they do \nnot have explicit rule priority fields. \n“In AWS, security rules are evaluated in the order they are created. To ensure the correct evaluation \nlogic, create them in the desired order from top to bottom.” \n(Source: Cloud NGFW for AWS Policy Evaluation) \nUnlike Panorama, AWS-native management of Cloud NGFWs uses creation order as the evaluation \nsequence."
  },
  {
    "id": 44,
    "text": "During a security incident investigation, which Security profile will have logs of attempted confidential \ndata exfiltration?",
    "options": {
      "A": "File Blocking Profile",
      "B": "Enterprise DLP Profile",
      "C": "Vulnerability Protection Profile",
      "D": "WildFire Analysis Profile"
    },
    "answer": [
      "B"
    ],
    "explanation": "Enterprise DLP Profile is specifically designed to detect and log data exfiltration attempts, including those \ninvolving confidential or sensitive data. \n“Enterprise DLP logs capture incidents involving potential data exfiltration. They help identify sensitive \ndata transfers, even in seemingly legitimate traffic.” \n(Source: Enterprise DLP Logging and Alerts) \nFile Blocking and Vulnerability Protection handle files or exploit detection, while WildFire focuses on \nmalware analysis—not direct data exfiltration."
  },
  {
    "id": 45,
    "text": "Which set of attributes is used by IoT Security to identify and classify appliances on a network when \ndetermining Device-ID?",
    "options": {
      "A": "IP address, network traffic patterns, and device type",
      "B": "MAC address, device manufacturer, and operating system",
      "C": "Hostname, application usage, and encryption method",
      "D": "Device model, firmware version, and user credential"
    },
    "answer": [
      "B"
    ],
    "explanation": "IoT Security uses MAC address, device manufacturer, and OS information to identify and classify \ndevices via Device-ID. \n“IoT Security uses passive network traffic analysis to fingerprint devices based on the MAC address, \nmanufacturer, and operating system to ensure accurate classification.” \n(Source: IoT Security Device-ID and Classification) \nThese attributes provide a robust, manufacturer-agnostic method to fingerprint IoT devices."
  },
  {
    "id": 46,
    "text": "Which two types of logs must be forwarded to Strata Logging Service for IoT Security to function? \n(Choose two.)",
    "options": {
      "A": "WildFire",
      "B": "Enhanced application",
      "C": "Threat",
      "D": "URL Filtering"
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "For IoT Security to accurately classify and monitor IoT devices, the following logs must be forwarded to \nStrata Logging Service: \nEnhanced application logs – provide detailed application usage and behaviors, essential for profiling \ndevice types and roles. \n“Enhanced Application logs provide additional context on IoT device behavior and usage patterns, and \nmust be forwarded to Strata Logging Service for IoT Security to build accurate Device-ID profiles.” \n(Source: IoT Security Logging Requirements) \nThreat logs – essential for detecting suspicious or malicious activities by IoT devices. \n“Threat logs are critical for identifying potential exploits or suspicious activities involving IoT devices and \nare required for accurate threat visibility within IoT Security.” \n(Source: IoT Security Logs) \nThese logs collectively ensure accurate device classification and real-time threat visibility."
  },
  {
    "id": 47,
    "text": "Which action is only taken during slow path in the NGFW policy?",
    "options": {
      "A": "Session lookup",
      "B": "Layer 2—Layer 4 firewall processing",
      "C": "SSL/TLS decryption",
      "D": "Security policy lookup"
    },
    "answer": [
      "C"
    ],
    "explanation": "In Palo Alto Networks' Single-Pass Parallel Processing (SP3) architecture, SSL/TLS decryption occurs \nonly during the slow path when the firewall first encounters a new session. \n“SSL/TLS decryption, which requires CPU-intensive cryptographic operations, is performed during the \nslow path when establishing new sessions. Once decrypted, traffic is processed in the fast path for \nsubsequent packets.” \n(Source: Packet Flow and SP3 Architecture) \nAfter the initial decryption in the slow path, decrypted traffic is handled by fast path for efficiency."
  },
  {
    "id": 48,
    "text": "Which feature of SaaS Security will allow a firewall administrator to identify unknown SaaS \napplications in an environment?",
    "options": {
      "A": "App-ID Cloud Engine",
      "B": "App-ID",
      "C": "SaaS Data Security",
      "D": "Cloud Identity Engine"
    },
    "answer": [
      "A"
    ],
    "explanation": "App-ID Cloud Engine (ACE) in SaaS Security uses cloud-based signatures to detect unknown and \nunsanctioned SaaS applications in the environment. \n“App-ID Cloud Engine (ACE) uses real-time cloud intelligence to identify SaaS applications, including \npreviously unknown or newly introduced applications.” \n(Source: ACE for SaaS Visibility) \nThis feature is key for comprehensive SaaS visibility beyond static signatures."
  },
  {
    "id": 49,
    "text": "How do Cloud NGFW instances get created when using AWS centralized deployments?",
    "options": {
      "A": "Cloud NGFW is placed in a vWAN with a virtual hub.",
      "B": "They replace the internet gateway service.",
      "C": "Selected VPCs will have Cloud NGFW workloads added to them.",
      "D": "A security VPC will be created as transit gateways to push all traffic through the area."
    },
    "answer": [
      "C"
    ],
    "explanation": "When using AWS centralized deployments for Cloud NGFW, the service deploys NGFW instances into \nselected VPCs as additional workloads to secure that traffic. \n“In centralized deployments, Cloud NGFW instances are deployed as security appliances within the \nselected VPCs, ensuring consistent traffic inspection and protection.” \n(Source: Cloud NGFW Deployment Models) \nThis approach minimizes complexity and ensures direct security policy enforcement within AWS."
  },
  {
    "id": 50,
    "text": "Which GlobalProtect configuration is recommended for granular security enforcement of remote user \ndevice posture?",
    "options": {
      "A": "Configuring host information profile (HIP) checks for all mobile users",
      "B": "Configuring a rule that blocks the ability of users to disable GlobalProtect while accessing internal \napplications",
      "C": "Implementing multi-factor authentication (MFA) for all users attempting to access internal applications",
      "D": "Applying log at session end to all GlobalProtect Security policies"
    },
    "answer": [
      "A"
    ],
    "explanation": "Host Information Profile (HIP) checks are used in GlobalProtect to collect and evaluate endpoint posture \n(OS, patch level, AV status) to enforce granular security policies for remote users. \n“The HIP feature collects information about the host and can be used in security policies to enforce \nposture-based access control. This ensures only compliant endpoints can access sensitive resources.” \n(Source: GlobalProtect HIP Checks) \nThis enables fine-grained, context-aware access decisions beyond user identity alone."
  },
  {
    "id": 51,
    "text": "Which AI-powered solution provides unified management and operations for NGFWs and Prisma \nAccess?",
    "options": {
      "A": "Strata Cloud Manager (SCM)",
      "B": "Autonomous Digital Experience Manager (ADEM)",
      "C": "Prisma Access Browser",
      "D": "Panorama"
    },
    "answer": [
      "A"
    ],
    "explanation": "Strata Cloud Manager (SCM) offers a cloud-based unified management plane for both NGFWs and \nPrisma Access, enabling consistent policy enforcement, simplified management, and AI-driven \noperational insights. \n“Strata Cloud Manager provides a single interface for unified management of NGFWs and Prisma \nAccess, leveraging AI to optimize security operations and streamline workflows.” \n(Source: Strata Cloud Manager Overview) \nUnlike Panorama, which is an on-premises management solution, SCM delivers cloud-based, AI-driven \ncapabilities for centralized oversight."
  },
  {
    "id": 52,
    "text": "Which action allows an engineer to collectively update VM-Series firewalls with Strata Cloud Manager \n(SCM)?",
    "options": {
      "A": "Creating an update grouping rule",
      "B": "Scheduling software update",
      "C": "Creating a device grouping rule",
      "D": "Setting a target OS version"
    },
    "answer": [
      "C"
    ],
    "explanation": "Device grouping rules in SCM allow administrators to organize firewalls into logical groups and \ncollectively manage updates or configuration pushes across those groups. \n“SCM allows you to create device group rules, enabling streamlined management and collective updates \nof multiple NGFW instances.” \n(Source: SCM Device Grouping) \nThis approach ensures consistency in software versions and configuration baselines across large \ndeployments."
  },
  {
    "id": 53,
    "text": "A network security engineer needs to implement segmentation but is under strict compliance \nrequirements to place security enforcement as close as possible to the private applications hosted in \nAzure. \nWhich deployment style is valid and meets the requirements in this scenario?",
    "options": {
      "A": "On a VM-Series NGFW, configure several Layer 2 zones with Layer 2 interfaces assigned to logically \nsegment the network.",
      "B": "On a PA-Series NGFW, configure several Layer 2 zones with Layer 2 interfaces assigned to logically \nsegment the network.",
      "C": "On a VM-Series NGFW, configure several Layer 3 zones with Layer 3 interfaces assigned to logically \nsegment the network.",
      "D": "On a PA-Series NGFW, configure several Layer 3 zones with Layer 3 interfaces assigned to logically \nsegment the network."
    },
    "answer": [
      "C"
    ],
    "explanation": "In cloud environments like Azure, the VM-Series NGFW is deployed to create Layer 3 segmentation \nzones closest to the application workloads. \n“In Azure, deploy VM-Series firewalls in Layer 3 mode to enforce security policies closest to private \napplications, meeting strict compliance and segmentation requirements.” \n(Source: VM-Series in Public Clouds) \nLayer 3 segmentation ensures security policies are enforced at the right boundary to isolate traffic within \nAzure’s virtual networks."
  },
  {
    "id": 54,
    "text": "A primary firewall in a high availability (HA) pair is experiencing a current failover issue with ICMP \npings to a secondary device. \nWhich metric should be reviewed for proper ICMP pings between the firewall pair?",
    "options": {
      "A": "Link monitoring",
      "B": "Non-functional state",
      "C": "Heartbeat polling",
      "D": "Bidirectional Forwarding Detection (BFD)"
    },
    "answer": [
      "C"
    ],
    "explanation": "Heartbeat polling is a core HA function to monitor connectivity between HA peers, leveraging ICMP pings \nto determine link health and availability. \n“Heartbeat Polling uses ICMP pings to verify the connectivity and health of the HA peers. If heartbeat \npolling fails, the firewall considers the peer to be down and may initiate failover.” \n(Source: HA Link and Path Monitoring) \nIf ICMP pings fail, checking heartbeat polling logs helps identify if link or path monitoring triggers the \nfailover."
  },
  {
    "id": 55,
    "text": "What are two recommendations to ensure secure and efficient connectivity across multiple locations \nin a distributed enterprise network? (Choose two.)",
    "options": {
      "A": "Use Prisma Access to provide secure remote access for branch users.",
      "B": "Employ centralized management and consistent policy enforcement across all locations.",
      "C": "Create broad VPN policies for contractors working at branch locations.",
      "D": "Implement a flat network design for simplified network management and reduced overhead."
    },
    "answer": [
      "A",
      "B"
    ],
    "explanation": "Prisma Access for secure remote access \n“Prisma Access extends consistent security and optimized connectivity to branch locations, enabling \nsecure access for mobile and branch users.” \n(Source: Prisma Access Overview) \nCentralized management for consistent policy enforcement \n“Centralized management using Strata Cloud Manager or Panorama ensures security policies and \nupdates are uniformly applied across distributed locations, preventing policy drift and security gaps.” \n(Source: Strata Cloud Manager Best Practices) \nThese two practices are foundational for modern, distributed enterprise networks to maintain security \nposture and performance."
  },
  {
    "id": 56,
    "text": "Which two configurations are required when creating deployment profiles to migrate a perpetual VM-Series firewall to a flexible VM? (Choose two.)",
    "options": {
      "A": "Choose “Fixed vCPU Models” for configuration type.",
      "B": "Allocate the same number of vCPUs as the perpetual VM.",
      "C": "Allow only the same security services as the perpetual VM.",
      "D": "Deploy virtual Panorama for management."
    },
    "answer": [
      "B",
      "C"
    ],
    "explanation": "When migrating from a perpetual VM-Series firewall license to a flexible VM licensing model, two critical \nsteps are needed: \nAllocate same number of vCPUs – This ensures that the VM-Series capacity remains consistent and \navoids resource bottlenecks. \n“When migrating perpetual VM-Series licenses to flexible VM licensing, allocate the same vCPU and \nmemory resources to ensure equivalent performance.” \n(Source: VM-Series Flexible Licensing Migration) \nLimit to same security services – Flexible licensing requires maintaining the same security services to \npreserve licensing compliance. \n“Ensure that you allow only the same security services on the flexible VM instance as were licensed on \nthe perpetual VM.” \n(Source: Flexible Licensing and Service Subscriptions)"
  },
  {
    "id": 57,
    "text": "What occurs when a security profile group named “default” is created on an NGFW?",
    "options": {
      "A": "It only applies to traffic that has been dropped due to the reset client action.",
      "B": "It allows traffic to bypass all security checks by default.",
      "C": "It negates all existing security profiles rules on new policy.",
      "D": "It is automatically applied to all new security rules."
    },
    "answer": [
      "D"
    ],
    "explanation": "A security profile group named “default” is automatically applied to all new security rules unless a specific \nprofile group is explicitly configured. \n“If a security profile group named ‘default’ exists, it will be automatically applied to any newly created \nsecurity policy rules to ensure consistent protection.” \n(Source: Security Profile Groups) \nThis behavior ensures that newly created policies are always protected by default security profiles, \nminimizing human error."
  },
  {
    "id": 58,
    "text": "In a service provider environment, what key advantage does implementing virtual systems provide for \nmanaging multiple customer environments?",
    "options": {
      "A": "Shared threat prevention policies across all tenants",
      "B": "Centralized authentication for all customer domains",
      "C": "Unified logging across all virtual systems",
      "D": "Logical separation of control and Security policy"
    },
    "answer": [
      "D"
    ],
    "explanation": "Virtual systems provide logical separation in a single physical firewall, allowing different customers (or \ntenants) to have isolated control and security policies. \n“Virtual systems enable service providers to offer logically separated, independent environments on a \nsingle firewall. Each virtual system can have its own security policies, interfaces, and administrators.” \n(Source: Virtual Systems) \nThis ensures secure, tenant-specific segmentation within multi-tenant environments."
  },
  {
    "id": 59,
    "text": "An administrator wants to implement additional Cloud-Delivered Security Services (CDSS) on a data \ncenter NGFW that already has one enabled. \nWhat benefit does the NGFW’s single-pass parallel processing (SP3) architecture provide?",
    "options": {
      "A": "It allows for traffic inspection at the application level.",
      "B": "There will be no additional performance degradation.",
      "C": "There will be only a minor reduction in performance.",
      "D": "It allows additional security inspection devices to be added inline."
    },
    "answer": [
      "C"
    ],
    "explanation": "The SP3 architecture of Palo Alto NGFWs ensures that additional security services (CDSS) only cause a \nminor reduction in performance, as traffic is inspected once in a single pass. \n“The single-pass parallel processing (SP3) architecture performs application identification and security \nenforcement simultaneously in one pass, resulting in only minor performance impacts when enabling \nmultiple security services.” \n(Source: SP3 Architecture) \nUnlike traditional multi-pass engines, SP3 architecture optimizes performance while delivering \ncomprehensive security."
  },
  {
    "id": 60,
    "text": "How can a firewall administrator block a list of 300 unique URLs in the most time-efficient manner?",
    "options": {
      "A": "Use application filters to block the App-IDs.",
      "B": "Use application groups to block the App-IDs.",
      "C": "Import the list into a custom URL category.",
      "D": "Block multiple predefined URL categories."
    },
    "answer": [
      "C"
    ],
    "explanation": "For large lists of specific URLs, creating a custom URL category and importing the list is the most \nefficient approach for granular URL filtering. \n“You can create custom URL categories to define specific URLs or patterns and enforce policies for \nthese categories. This is the most efficient way to handle large sets of URLs.” \n(Source: Custom URL Categories) \nThis approach saves time compared to manual rule creation or using generic application filters."
  }
];
