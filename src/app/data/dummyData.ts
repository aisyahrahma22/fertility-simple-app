const coursesData = [
  {
      id: "ivf",
      title: "IVF - In Vitro Fertilization",
      description: "The most complex fertility treatment explained step-by-step to help you succeed on your first attempt.",
      category: "Advanced",
      feat: "Featuring experts from Cornell, CCRM, +17 more.",
      price: 195000,
      views: 631000,
      duration: "16 lessons, 3h 28m",
      refundPolicy: "Full refund within 30 days, no questions asked",
      eligibility: "Eligible for FSA/HSA",
      experts: [
        { name: "Dr. Torie Comeaux Plowden", title: "Walter Reed Medical Center", image:'/dr-torie.svg', description: 'Assistant Division Director', notes: "The education all male factor patients deserve, but few truly get." },
        { name: "Dr. Chantel Cross", title: "Johns Hopkins School of Medicine", image:'/dr-chantel.svg', description: 'Associate Director' , notes: "Admired by the very best fertility doctors.",},
        { name: "Dr. Valerie McCaffrey", title: "NYU School of Medicine", image:'/dr-valerie.svg', description: 'Medical Director' , notes: "Where respected experts help patients make more informed choices.",},
        { name: "Dr. Christian M. Becker", title: "Oxford University, UK", image:'/dr-christian.svg', description: 'Co-Director, Oxford BSGE Endometriosis Centre', notes: "Dedicated to advancing patient education and care." },
        { name: "Dr. Eric Forman", title: "Columbia University Medical Center", image:'/dr-eric.svg', description: 'Laboratory Director', notes: "Empowering patients with the knowledge they need to succeed." },
        { name: "Dr. Nalini Kaul", title: "Ferticity Fertility Clinics, India", image:'/dr-nalini.svg', description: 'Director, Mother & Child Hospital', notes: "Innovating treatments to create better outcomes for families." },
        { name: "Dr. Eve Patel", title: "Stanford University Medical Center", image:'/dr-eve.svg', description: 'Clinical Researcher', notes: "Guiding patients through complex fertility journeys." },
        { name: "Dr. Jamie Dawson", title: "Harvard Medical School", image:'/dr-jamie.svg', description: 'Senior Research Fellow', notes: "Helping patients understand the science behind success." },
        { name: "Dr. Zev Wang", title: "University of California, Los Angeles", image:'/dr-zev.svg', description: 'Professor of Reproductive Health', notes: "Committed to evidence-based practices for better health."},
        { name: "Dr. David Miller", title: "Cleveland Clinic", image:'/dr-david.svg', description: 'Fertility Specialist', notes: "Partnering with patients to achieve their dreams." },
        { name: "Dr. William Thompson", title: "Mayo Clinic", image:'/dr-william.svg', description: 'Medical Research Director', notes: "Building trust through transparency and expertise."},
        { name: "Dr. Jorge Lee", title: "University of Sydney, Australia", image:'/dr-jorge.svg', description: 'Head of IVF Research', notes: "Shaping the future of fertility care with cutting-edge research." }
      ],
      syllabus: [
        {
          title: "What is IVF?",
          duration: "8 min",
          details: [
            "Introduction to IVF",
            "Who benefits from IVF?",
            "Success Rates and Expectations",
            "IVF vs Other Fertility Treatments"
          ]
        },
        {
          title: "The IVF Process",
          duration: "14 min",
          details: [
            "Ovarian Stimulation Overview",
            "Egg Retrieval Procedure",
            "Embryo Transfer Process",
            "Pregnancy Testing After IVF"
          ]
        },
        {
          title: "Factors Affecting IVF Success",
          duration: "5 min",
          details: [
            "Understanding Success Rate Determinants",
            "Age and IVF Success",
            "Health Factors and IVF Outcomes",
          ]
        },
        {
          title: "Embryo Development in IVF",
          duration: "10 min",
          details: [
            "Cleavage vs Blastocyst Stage",
            "Embryo Quality and Success Rates"
          ]
        },
        {
          title: "PGT-A & Genetic Testing",
          duration: "15 min",
          details: [
            "What is PGT-A?",
            "Benefits of Genetic Screening",
            "How PGT-A Affects IVF Success"
          ]
        },
        {
          title: "Embryo Selection and Transfer",
          duration: "12 min",
          details: [
            "Selecting the Right Embryo",
            "Fresh vs Frozen Embryo Transfers",
            "Factors Influencing Embryo Transfer Success"
          ]
        },
        {
          title: "IVF Laboratory and Risks",
          duration: "10 min",
          details: [
            "Importance of the IVF Laboratory",
            "Risks and Complications in IVF",
            "How to Minimize Risks"
          ]
        }
      ],
      learningObjectives:
          "IVF is complicated and—while we wish we could say that it's possible to absorb all the details during the 5 - 30 minute visits with your doctor—that's really not the case. This comprehensive guide to IVF boils down every major issue you'll encounter—a high level overview of the IVF process, a deeper dive into the IVF process, IVF success rates and how they differ depending on diagnosis and age, the medication protocols that can be used during IVF, the choice of inseminating eggs either using ICSI fertilization or conventional insemination, the pros and cons of growing embryos to Day 3 cleavage stage or Day 5 blastocyst stage, the decisions around genetic screening of embryos, deciding which embryo to transfer, deciding how many embryos to transfer at once, the ways the IVF laboratory can impact your odds of success and the things you need to know up front to avoid going to the wrong lab for you, the risks of IVF, and the costs of IVF. We're always sure to provide details about how data might be different depending on unique types of patients—because in the world of fertility, it's really not one-size-fits-all. We truly believe this guide is the foundation every fertility patient should start with when they're navigating the world of treatments.",
      relatedCourses: [
          { id: "embryo-transfer", title: "Embryo Transfer", description: "Learn about medicated vs. unmedicated cycles, fresh vs. frozen embryos, and transfer day tips." },
          { id: "pgt-genetic-screening", title: "PGT-A Genetic Screening", description: "Understand when genetic screening adds value and its costs." },
          { id: "the-ivf-laboratory", title: "The IVF Laboratory", description: "Learn how to evaluate lab quality to maximize your success rates." },
          { id: "endometriosis", title: "Endometriosis", description: "Diagnose and treat endometriosis effectively, based on your unique circumstances." },
      ],
  },
  {
      id: "embryo-transfer",
      title: "Embryo Transfer",
      description: "Learn about medicated vs. unmedicated cycles, fresh vs. frozen embryos, and transfer day tips.",
      category: "Advanced",
      feat: "Featuring experts from Cornell, Johns Hopkins, +16 more.",
      price: 180000,
      views: 19000,
      duration: "5 lessons, 1h 15m",
      experts: [
          { name: "Dr. Jamie Alan McKinley", title: "Director, Reproductive Medicine, Stanford" , image:'/dr-jamie.svg',description: 'Director', notes: "Advocating for comprehensive care for every patient." },
          { name: "Dr. Zev Brooke Anderson", title: "Lead Specialist, IVF Australia" , image:'/dr-zev.svg',description: 'Medical Director', notes: "Providing clarity in the face of uncertainty." },
      ],
      syllabus: [
        {
          title: "Types of Embryo Cycles",
          duration: "10 min",
          details: [
            "Medicated vs Unmedicated Cycles",
            "Choosing the Best Cycle for You"
          ]
        },
        {
          title: "Fresh vs Frozen Embryos",
          duration: "8 min",
          details: [
            "Differences Between Fresh and Frozen Embryos",
            "Success Rates and Considerations"
          ]
        },
        {
          title: "Transfer Day Essentials",
          duration: "12 min",
          details: [
            "What to Expect on Transfer Day",
            "Tips for a Successful Transfer",
            "Post-Transfer Care"
          ]
        },
        {
          title: "Embryo Transfer Success Factors",
          duration: "10 min",
          details: [
            "Factors That Influence Transfer Success",
            "Embryo Quality and Timing"
          ]
        },
        {
          title: "Challenges in Embryo Transfer",
          duration: "14 min",
          details: [
            "Why Transfers Fail",
            "Understanding Failure and How to Manage It"
          ]
        }
      ],
      learningObjectives:
          "This course teaches the critical decisions regarding embryo transfer cycles, including medication protocols, embryo types, and transfer strategies.",
      relatedCourses: [
          { id: "ivf", title: "IVF - In Vitro Fertilization", description: "Master the complexities of IVF treatment to achieve success the first time." },
      ],
  },
  {
      id: "fertility-101",
      title: "Fertility 101",
      description: "Comprehensive data on natural conception and fertility diagnosis",
      category: "Introduction",
      feat: "Featuring experts from Cornell, Johns Hopkins, +3 more.",
      price: 100000,
      views: 8000,
      duration: "4 lessons, 50m",
      experts: [
          { name: "Dr. Alice Adams", description: 'Medical Director' , title: "Fertility Specialist, NYU Langone", image:'/dr-alice.svg', notes: "Dedicated to optimizing outcomes for all patients."},
          { name: "Dr. David Green", description: 'Associate Director' , title: "Obstetrics and Gynecology Specialist, Harvard", image:'/dr-david.svg', notes: "Leading advancements in fertility preservation techniques."},
      ],
      syllabus: [
        {
          title: "Understanding Fertility",
          duration: "10 min",
          details: [
            "Basic Concepts of Fertility",
            "How Conception Occurs Naturally"
          ]
        },
        {
          title: "Diagnosing Fertility Problems",
          duration: "12 min",
          details: [
            "Common Fertility Tests",
            "How to Approach Fertility Treatment"
          ]
        },
        {
          title: "Ovulation and Timing",
          duration: "8 min",
          details: [
            "How Ovulation Affects Conception",
            "Tracking Ovulation for Better Chances"
          ]
        },
        {
          title: "Common Fertility Challenges",
          duration: "10 min",
          details: [
            "Polycystic Ovary Syndrome (PCOS)",
            "Endometriosis and Fertility",
            "Male Infertility Factors"
          ]
        }
      ],
      learningObjectives:
          "This course offers a comprehensive understanding of fertility, including how to diagnose common fertility problems and manage them.",
      relatedCourses: [
          { id: "ivf", title: "IVF - In Vitro Fertilization", description: "Master the complexities of IVF treatment to achieve success the first time." },
      ],
  },
  {
      id: "mental-health-fertility",
      title: "Mental Health & Fertility",
      description: "Address anxiety, depression, and stress related to fertility. Explore relaxation techniques, SSRI antidepressants, and relationship management with insights from Harvard and Cornell.",
      category: "Population Specific",
      feat: "Featuring experts from Columbia, UCLA, +10 more.",
      price: 120000,
      views: null,
      duration: "4 lessons, 1h 5m",
      experts: [
          { name: "Dr. Eve Winters", description: 'Medical Director' , title: "Psychologist, Harvard", image:'/dr-eve.svg', notes: "Emphasizing personalized care for unique challenges." },
          { name: "Dr. Eric Hughes", description: 'Associate Director' , title: "Mental Health Specialist, Cornell", image:'/dr-eric.svg', notes: "Striving for excellence in male fertility care." },
      ],
      syllabus: [
        {
          title: "Mental Health and Fertility",
          duration: "12 min",
          details: [
            "Understanding the Link Between Mental Health and Fertility",
            "Stress and Anxiety in Fertility Treatments"
          ]
        },
        {
          title: "Coping with Fertility Stress",
          duration: "14 min",
          details: [
            "Coping Strategies for Anxiety and Depression",
            "Mindfulness Techniques for Stress Relief"
          ]
        },
        {
          title: "Using SSRI Medications in Fertility",
          duration: "10 min",
          details: [
            "How SSRIs Impact Fertility Treatment",
            "Consulting with Your Doctor About Medications"
          ]
        },
        {
          title: "Relationship Management During Fertility Struggles",
          duration: "15 min",
          details: [
            "Communication with Your Partner",
            "Supporting Each Other Through the Journey"
          ]
        }
      ],
      learningObjectives:
          "This course helps you manage mental health during fertility treatments, offering coping strategies and professional support.",
      relatedCourses: [
          { id: "fertility-101", title: "Fertility 101", description: "Comprehensive data on natural conception and fertility diagnosis." },
      ],
  },
  {
      id: "pcos",
      title: "PCOS - Polycystic Ovary Syndrome",
      description: "Understand PCOS diagnosis, treatment, and lifestyle changes with guidance from Columbia, UCLA, and more.",
      category: "Introduction",
      feat: "Featuring experts from Yale, UCLA, +10 more.",
      price: 110000,
      views: null,
      duration: "4 lessons, 1h",
      experts: [
          { name: "Dr. Jorge Roberts", description: 'Medical Director' , title: "Endocrinologist, Columbia University", image:'/dr-jorge.svg', notes: "Supporting families with compassionate and informed care." },
          { name: "Dr. Owen Lewis", description: 'Associate Director' , title: "OB-GYN Specialist, UCLA", image:'/dr-owen.svg', notes: "Bringing hope through innovative reproductive solutions." },
      ],
      syllabus: [
        {
          title: "What is PCOS?",
          duration: "10 min",
          details: [
            "Understanding the Symptoms and Causes of PCOS",
            "How PCOS Affects Fertility"
          ]
        },
        {
          title: "Diagnosing PCOS",
          duration: "8 min",
          details: [
            "Medical Tests for Diagnosing PCOS",
            "How to Recognize the Symptoms"
          ]
        },
        {
          title: "Lifestyle Changes for PCOS",
          duration: "12 min",
          details: [
            "Diet and Exercise Recommendations",
            "Managing Weight for Better Fertility"
          ]
        },
        {
          title: "Managing Fertility with PCOS",
          duration: "10 min",
          details: [
            "Fertility Treatments for Women with PCOS",
            "How to Improve Your Chances of Conception"
          ]
        }
      ],
      learningObjectives:
          "Learn about the causes, diagnosis, and treatment options for PCOS and how it affects fertility.",
      relatedCourses: [
          { id: "fertility-101", title: "Fertility 101", description: "Comprehensive data on natural conception and fertility diagnosis." },
      ],
  },
  {
      id: "egg-freezing",
      title: "Egg Freezing",
      description: "Be a confident advocate for fertility preservation with guidance from Johns Hopkins and Cornell.",
      category: "Population Specific",
      feat: "Featuring experts from Yale, Northwestern, +15 more.",
      price: 150000,
      views: null,
      duration: "4 lessons, 1h 10m",
      experts: [
          { name: "Dr. David Neely", description: 'Associate Director' , title: "Reproductive Endocrinologist, Mayo Clinic", image:'/dr-david.svg', notes: "Providing world-class expertise in fertility and reproductive medicine." },
          { name: "Dr. Michael Teague", description: 'Medical Director' , title: "Chief Fertility Specialist, UCLA", image:'/dr-michael.svg', notes: "Helping patients make informed decisions with confidence." },
      ],
      syllabus: [
        {
          title: "Introduction to Egg Freezing",
          duration: "10 min",
          details: [
            "What Is Egg Freezing?",
            "Why Consider Egg Freezing?"
          ]
        },
        {
          title: "Risks and Benefits of Egg Freezing",
          duration: "12 min",
          details: [
            "Understanding the Risks of Freezing Eggs",
            "Benefits for Fertility Preservation"
          ]
        },
        {
          title: "Hormonal Preparation for Egg Freezing",
          duration: "10 min",
          details: [
            "How Hormonal Treatment Prepares the Eggs",
            "Monitoring During the Freezing Process"
          ]
        },
        {
          title: "Egg Retrieval Process",
          duration: "15 min",
          details: [
            "What Happens During Egg Retrieval",
            "What to Expect and How to Prepare"
          ]
        }
      ],
      learningObjectives:
          "Equip yourself with the knowledge needed for the egg freezing process, including preparation, risks, and benefits.",
      relatedCourses: [
          { id: "ivf", title: "IVF - In Vitro Fertilization", description: "Master the complexities of IVF treatment to achieve success the first time." },
      ],
  },
  {
      id: "miscarriage",
      title: "Miscarriage",
      description: "Navigate miscarriage, including diagnostics, options, and emotional coping, with insights from Johns Hopkins and Columbia.",
      category: "Population Specific",
      price: 130000,
      feat: "Featuring experts from Johns Hopkins, Columbia, +7 more.",
      views: null,
      duration: "4 lessons, 1h",
      experts: [
          { name: "Dr. Torie Douglas", description: 'Medical Director' , title: "Obstetrician, Johns Hopkins" , image:'/dr-torie.svg', notes: "Driven to improve access and outcomes in fertility care."},
          { name: "Dr. Alice McGrath", description: 'Medical Director, REI' , title: "Obstetrician, Columbia University" , image:'/dr-alice.svg', notes: "Fostering a compassionate environment for every patient’s fertility journey."},
      ],
      syllabus: [
        {
          title: "Understanding Miscarriage",
          duration: "12 min",
          details: [
            "What Causes a Miscarriage?",
            "Physical and Emotional Effects of a Miscarriage"
          ]
        },
        {
          title: "Coping with Emotional Loss",
          duration: "14 min",
          details: [
            "Grieving After a Miscarriage",
            "Support Systems and Therapy Options"
          ]
        },
        {
          title: "Medical Options After Miscarriage",
          duration: "10 min",
          details: [
            "Treatment Options Post-Miscarriage",
            "When to Seek Medical Advice"
          ]
        },
        {
          title: "Coping with Grief and Loss",
          duration: "12 min",
          details: [
            "Emotional Support Strategies",
            "How to Heal After a Loss"
          ]
        }
      ],
      learningObjectives:
          "Learn how to cope with miscarriage emotionally, navigate your options, and understand the medical aspects of miscarriage.",
      relatedCourses: [
          { id: "fertility-101", title: "Fertility 101", description: "Comprehensive data on natural conception and fertility diagnosis." },
      ],
  },
];

  
  // Additional Content Section
  const quickReads = [
    { topic: "FEATURED CONTENT", title: "The Guttmacher Institute: A Reproductive Health Policy Resource" },
    { topic: "FERTILITYIQ DATA", title: "Sample Global Costs" },
    { topic: "MEDICAL RESEARCH", title: "Endometrial Receptivity Testing" },
    { topic: "FEATURED CONTENT", title: "Fertility Treatments After Roe & Dobbs + Alabama Supreme Court Case" },
    { topic: "FERTILITYIQ DATA", title: "Global Trends in Fertility Rates: A Comprehensive Analysis" },
    { topic: "MEDICAL RESEARCH", title: "Understanding Egg Freezing: Medical and Emotional Aspects" },
    { topic: "FERTILITYIQ DATA", title: "Impact of Lifestyle Choices on IVF Success Rates" },
    { topic: "FEATURED CONTENT", title: "Fertility Preservation for Cancer Patients: What You Need to Know" },
    { topic: "MEDICAL RESEARCH", title: "International Fertility Laws and Their Implications" },
    { topic: "FERTILITYIQ DATA", title: "Fertility and Age: Key Insights from Recent Studies" },
    { topic: "FEATURED CONTENT", title: "The Psychological Effects of Fertility Treatments" },
    { topic: "FERTILITYIQ DATA", title: "Exploring Male Infertility: Causes, Diagnosis, and Treatment" },
    { topic: "MEDICAL RESEARCH", title: "Polycystic Ovary Syndrome (PCOS): Treatment Options and Latest Research" },
    { topic: "FERTILITYIQ DATA", title: "In Vitro Fertilization (IVF): Success Rates and Factors to Consider" },
    { topic: "FEATURED CONTENT", title: "Understanding Sperm Donation: Legal and Ethical Considerations" },
    { topic: "FERTILITYIQ DATA", title: "Fertility in the LGBTQ+ Community: Challenges and Solutions" },
    { topic: "MEDICAL RESEARCH", title: "Surrogacy: Legal and Ethical Challenges in Modern Reproductive Medicine" },
    { topic: "FEATURED CONTENT", title: "Egg Donation: Process, Risks, and Legal Implications" },
    { topic: "FERTILITYIQ DATA", title: "Fertility Clinics: How to Choose the Right One for You" },
    { topic: "FEATURED CONTENT", title: "Reproductive Health in Men: Exploring New Treatment Options" },
    { topic: "FERTILITYIQ DATA", title: "Exploring the Success of IUI Treatments: What the Data Shows" },
    { topic: "MEDICAL RESEARCH", title: "The Effects of Stress on Fertility: New Insights from Research" },
    { topic: "FERTILITYIQ DATA", title: "Understanding Endometriosis and Its Impact on Fertility" },
    { topic: "FEATURED CONTENT", title: "Egg Freezing: The Process and What to Expect" },
    { topic: "FERTILITYIQ DATA", title: "The Impact of Diet on Male and Female Fertility" },
    { topic: "MEDICAL RESEARCH", title: "Fertility and Genetics: What We Know So Far" },
    { topic: "FEATURED CONTENT", title: "Navigating Fertility Treatment Costs: Tips for Managing Your Budget" },
    { topic: "FERTILITYIQ DATA", title: "The Role of Acupuncture in Fertility Treatments" },
    { topic: "FEATURED CONTENT", title: "Exploring the Latest Fertility Research and Breakthroughs" },
    { topic: "FERTILITYIQ DATA", title: "How to Build a Fertility-Friendly Lifestyle" },
    { topic: "MEDICAL RESEARCH", title: "The Impact of Environmental Toxins on Fertility" },
    { topic: "FEATURED CONTENT", title: "Making Informed Choices in Fertility Treatments" },
    { topic: "FERTILITYIQ DATA", title: "Understanding IVF Cycles: Timing and Success Rates" },
    { topic: "MEDICAL RESEARCH", title: "The Role of Mindfulness and Stress Reduction in Fertility" },
    { topic: "FEATURED CONTENT", title: "Fertility Preservation: Options for Women and Men" },
    { topic: "FERTILITYIQ DATA", title: "The Importance of Early Fertility Testing" },
    { topic: "FEATURED CONTENT", title: "The Psychological Impact of Miscarriage and How to Cope" },
    { topic: "MEDICAL RESEARCH", title: "Exploring the Use of Genetic Testing in IVF" },
    { topic: "FERTILITYIQ DATA", title: "How to Improve IVF Success Rates with Lifestyle Changes" },
    { topic: "FEATURED CONTENT", title: "The Evolution of Fertility Treatments: What’s Next?" },
    { topic: "FERTILITYIQ DATA", title: "International Fertility Treatment Costs: A Comparison" },
    { topic: "FEATURED CONTENT", title: "Understanding Fertility Preservation for LGBTQ+ Individuals" },
    { topic: "MEDICAL RESEARCH", title: "The Relationship Between Mental Health and Fertility" },
    { topic: "FERTILITYIQ DATA", title: "Navigating the Emotional Journey of Fertility Treatments" },
    { topic: "FEATURED CONTENT", title: "Fertility Challenges for Same-Sex Couples: What You Need to Know" },
    { topic: "FERTILITYIQ DATA", title: "Success Rates of Egg Freezing: What the Data Shows" },
    { topic: "FEATURED CONTENT", title: "Understanding the Role of Genetics in Fertility Treatments" },
    { topic: "FERTILITYIQ DATA", title: "Latest Trends in Male Fertility Testing and Treatment" },
    { topic: "MEDICAL RESEARCH", title: "The Potential of Stem Cell Therapy for Fertility Treatments" },
    { topic: "FEATURED CONTENT", title: "How to Support a Partner Going Through Fertility Treatments" },
    { topic: "FERTILITYIQ DATA", title: "The Impact of Age on Fertility: Key Data and Insights" },
    { topic: "FEATURED CONTENT", title: "The Future of Fertility Treatment Access: What’s Changing?" },
    { topic: "FERTILITYIQ DATA", title: "How Fertility Treatments Are Changing in Different Countries" },
    { topic: "FEATURED CONTENT", title: "The Role of Support Networks in Fertility Treatment Success" },
    { topic: "FERTILITYIQ DATA", title: "How to Choose Between IVF and IUI: What You Need to Know" }
  ];  

  const exploreTopics = [
    { name: "IVF & Fertility Treatments", views: 631000, category: "Advanced" },
    { name: "Preparing Mind & Body", views: 86000, category: "Introductory" },
    { name: "Egg Freezing", views: 213000, category: "Advanced" },
    { name: "Race & Ethnicity", views: 10000, category: "Population Specific" },
    { name: "Adoption & Foster", views: 50000, category: "Population Specific" },
    { name: "Fertility Diagnoses", views: 60000, category: "Population Specific" },
    { name: "Grief & Loss", views: 1222224, category: "Population Specific" }
  ];
  
  export { coursesData, quickReads, exploreTopics };
  