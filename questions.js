// ─────────────────────────────────────────────────────────────
// QUESTIONS — edit this file to customise your quiz
//
// Each question needs:
//   q       — the question text (string)
//   options — array of exactly 4 answer strings
//   answer  — index of the correct option (0 = A, 1 = B, 2 = C, 3 = D)
// ─────────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    q: 'Define the function of the erector pili muscle',
    options: ['Cause the hair follicle to stand erect (goose pimples)', 'Constrict the flow of blood to the epidermis', 'The layer of muscle found below the dermis', 'Pumps sebum to the surface of the skin'],
    answer: 0
  },
  {
    q: 'Define sebum',
    options: ['Milky fluid found in the axilla and groin', 'Sweat (water) that controls body temperature', 'A fatty acid that keeps the skin moist and lubricates the hair shaft', 'Alkaline solution that balances the Ph level of the skin'],
    answer: 2
  },
  {
    q: 'List the correct order of the layers of the skin',
    options: ['Spinosum, Corneum, Lucidum, Granulosum, Germinativum', 'Corneum, Lucidum, Granulosum, Spinosum, Germinativum', 'Lucidum, Granulosum, Spinosum, Corneum, Germinativum', 'Corneum, Spinosum, Lucidum, Granulosum, Germinativum'],
    answer: 1
  },
  {
    q: 'The skin produces two products, these are',
    options: ['Melatonin and Vitamin D', 'Vitamin E and Myelin', 'Melanin and Vitamin E', 'Melanin and Vitamin D'],
    answer: 3
  },
  {
    q: 'I have a skin disorder, it is as follows. A bacterial infection causing thin roofed blisters, which weep and leave a thick, yellow crust. It is highly contagious. What is the disorder?',
    options: ['Impetigo', 'Warts', 'Psoriasis', 'Carcinoma'],
    answer: 0
  },
  {
    q: 'If you were to supinate your arm, would you',
    options: ['Turn it to face downwards', 'Move it away from the body', 'Turn it to face upwards', 'Move it towards the body'],
    answer: 2
  },
  {
    q: "Which of the following doesn't contain involuntary muscle",
    options: ['Digestive system', 'Heart', 'Respiratory system', 'Genito-urinary system'],
    answer: 1
  },
  {
    q: 'Where would you find the sternocleidomastoid?',
    options: ['Across the top of the shoulders', 'Upper back', 'Chest', 'Running up the neck'],
    answer: 3
  },
  {
    q: 'What is the function of the orbicularis oculi',
    options: ['Raise the corner of the mouth', 'Rotates the head', 'Closes the eyelid', 'Plantarflexes the ankle'],
    answer: 2
  },
  {
    q: 'What is the cause of fibrositis',
    options: ['A build up of lactic acid in the muscle', 'Overexertion', 'Sodium depletion', 'Scar tissue that has not healed'],
    answer: 0
  },
  {
    q: 'Where would you typically find squamous epithelium',
    options: ['Lining the circulatory system', 'Lining the stomach', 'Lining the respiratory system', 'Lining the bladder'],
    answer: 0
  },
  {
    q: 'When a cell reproduces and divides the term is',
    options: ['Meiosis', 'Osmosis', 'Mitosis', 'Melanosis'],
    answer: 2
  },
  {
    q: 'Define adipose tissue',
    options: ['Loose connective tissue', 'Semi-solid tissue', 'Elastic tissue', 'Fatty tissue'],
    answer: 3
  },
  {
    q: 'What am I explaining: The transfer of a substance by pressure, when the concentration of the substance on one side of the membrane is greater than the other. The transference stops when an equal concentration has been achieved.',
    options: ['Filtration', 'Osmosis', 'Diffusion', 'Dissolution'],
    answer: 1
  },
  {
    q: 'What is the majority of a cell made up of',
    options: ['Carbohydrates', 'Cytoplasm', 'Protoplasm', 'Nucleus'],
    answer: 1
  },
  {
    q: 'How many vertebrae form the spine',
    options: ['33', '37', '29', '34'],
    answer: 0
  },
  {
    q: 'Which is NOT a good example of a long bone',
    options: ['Metatarsals', 'Ribs', 'Femur', 'Radius'],
    answer: 1
  },
  {
    q: 'Where would I find the occipital bone',
    options: ['In the orbital cavity', 'The jaw or ankle', 'Front of the skull', 'Back of the cranium'],
    answer: 3
  },
  {
    q: 'What is the cause of osteoporosis',
    options: ['Growing old', 'Calcium deficiency', 'Stress', 'Autoimmune disease'],
    answer: 1
  },
  {
    q: 'Where would be a good example of a pivot joint',
    options: ['Between the atlas and axis cervical vertebrae', 'Elbow', 'Between the carpals and tarsals', 'Hip'],
    answer: 0
  },
  {
    q: 'Which endocrine gland secretes hormones that regulate growth and other glands?',
    options: ['Pineal', 'Thyroid', 'Pituitary', 'Pancreas'],
    answer: 2
  },
  {
    q: 'What is the function of thyroxine',
    options: ['Regulation of water absorption', 'Stimulates the contractions of the uterus', 'Controls metabolic rate', 'Regulates salts in the body'],
    answer: 2
  },
  {
    q: 'Where are the adrenal glands found',
    options: ['Either side of the neck', 'The base of the brain', 'In the thorax', 'Superior to the kidneys'],
    answer: 3
  },
  {
    q: 'What does PMS stand for',
    options: ['Pre-Menstrual Syndrome', 'Pre-Monster Syndrome', 'Post-Menopausal Syndrome', 'Post-Menstrual Syndrome'],
    answer: 0
  },
  {
    q: 'What is the effect of amenorrhoea',
    options: ['Menstruation every 2-3 weeks', 'Absence of menstruation', 'Muscular atrophy', 'The patient becomes hirsute'],
    answer: 1
  },
  {
    q: 'What is the function of thrombocytes',
    options: ['Transport of nutrients', 'Protect the body from infection', 'Blood Clotting', 'Solvent in the blood'],
    answer: 2
  },
  {
    q: 'As you look at the diagram of the heart - what is the top right hand chamber called',
    options: ['Right atrium', 'Left atrium', 'Right ventricle', 'Left ventricle'],
    answer: 1
  },
  {
    q: 'Which chamber of the heart does oxygenated blood return to?',
    options: ['Right atrium', 'Left atrium', 'Right ventricle', 'Left ventricle'],
    answer: 1
  },
  {
    q: 'Which is the main artery that supplies blood to the legs?',
    options: ['Tibial', 'Renal', 'Brachial', 'Femoral/Iliac'],
    answer: 3
  },
  {
    q: 'What disease am I describing? Inflammation of a vein.',
    options: ['Phlebitis', 'Atherosclerosis', 'Haemorrhoids', 'Thrombus'],
    answer: 0
  },
  {
    q: 'How do lymphatic capillaries differ to vascular capillaries',
    options: ['They do not differ', 'They are not porous', 'They are not continuous, they have a blind end', 'They are held open with hoops of hyaline cartilage'],
    answer: 2
  },
  {
    q: 'What is one of the functions of lymph',
    options: ['Transport oxygen to the tissue', 'Adds lymphocytes to the blood', 'Transport carbon dioxide from the tissues', 'Bathes tissue in plasma'],
    answer: 1
  },
  {
    q: 'How is lymph circulated',
    options: ['It is pumped by the heart', 'The spleen pumps lymph', 'Gravity draws it to the hands and feet', 'Skeletal muscle contraction and valves'],
    answer: 3
  },
  {
    q: 'What is the function of lymph nodes',
    options: ['They filter lymph only', 'To produce new lymphocytes only', 'A point of re-entry to the blood stream', 'To filter lymph and produce new lymphocytes'],
    answer: 3
  },
  {
    q: 'Which part of the brain has control over cardiac output',
    options: ['Cerebrum', 'Cerebellum', 'Medulla oblongata', 'Pons varolii'],
    answer: 2
  },
  {
    q: 'Define dendrites',
    options: ['A long single nerve fibre', 'Nerve fibres like branches that transmit nerve impulses', 'The centre of the neurone', 'Point where one neurone meets another'],
    answer: 1
  },
  {
    q: 'What does the peripheral nervous system do?',
    options: ['Transmits information to and from the body', "Stimulates the body's involuntary organs", 'Slows down the body', 'Transmission of the sensory information only'],
    answer: 0
  },
  {
    q: 'Name a reaction of the nervous system outside the control of the brain',
    options: ['Digestion', 'Respiration', 'Reflexes', 'Heartbeat'],
    answer: 2
  },
  {
    q: "What would be a symptom of Bell's palsy",
    options: ['Pain down the lower back and leg', 'Tremor', 'Loss of co-ordination', 'Facial paralysis'],
    answer: 3
  },
  {
    q: 'Chloasma can be recognised by:',
    options: ['White patches of skin', 'Yellow patches of skin', 'Red patches of skin with silvery scales', 'Brown patches of skin'],
    answer: 3
  },
  {
    q: 'The skin has the ability to absorb:',
    options: ['Mineral oils', 'Chemical substances', 'Water', 'Aqueous creams'],
    answer: 1
  },
  {
    q: 'Which of the following can be found in the epidermis?',
    options: ['Elastin', 'Melanocytes', 'Lymph vessels', 'Sweat glands'],
    answer: 1
  },
  {
    q: 'The dermal papilla can be found in the:',
    options: ['Stratum germinativum', 'Subcutaneous layer', 'Layer between the epidermis and dermis', 'At the base of the hair follicle'],
    answer: 3
  },
  {
    q: 'The cells containing keratin can be found in which layer of the skin?',
    options: ['Stratum Spinosum', 'Dermis', 'Stratum Granulosum', 'Stratum Germinativum'],
    answer: 2
  },
  {
    q: 'The action of the masseter muscle is to:',
    options: ['Raise the lower jaw', 'Raise the lips', 'Flex the head', 'Compress the nasal opening'],
    answer: 0
  },
  {
    q: 'The pterygoids are:',
    options: ['Bone', 'Layer of skin', 'Muscle', 'Nerve'],
    answer: 2
  },
  {
    q: 'The lymphatic system relies on the muscular system for:',
    options: ['Leverage', 'Movement', 'Digestion', 'Absorption'],
    answer: 1
  },
  {
    q: 'The action of the biceps femoris is to:',
    options: ['Flex the hip, extend the knee', 'Abduct the leg', 'Extend the hip, flex the knee', 'Flex the arm'],
    answer: 2
  },
  {
    q: 'The action of the gluteus medius is to:',
    options: ['Rotate the femur', 'Adduct and laterally rotate the femur', 'Flex the femur', 'Abduct and medially rotate the femur'],
    answer: 3
  },
  {
    q: 'Endoplasmic reticulum:',
    options: ['Is a protein factory', 'Forms a network of canals', 'Combines carbohydrates with protein compounds for energy', 'Releases energy and forms adenosine triphosphate'],
    answer: 1
  },
  {
    q: 'Mitosis is the process of:',
    options: ['Cell structure', 'Protection against UV light', 'Eliminating toxins from the skin', 'Cell division'],
    answer: 3
  },
  {
    q: 'Areolar tissue is a type of:',
    options: ['Connective tissue', 'Epithelial tissue', 'Nervous tissue', 'Muscular tissue'],
    answer: 0
  },
  {
    q: 'The functions of the areolar tissue include:',
    options: ['Protection, insulation', 'Support, connection', 'Stretch, recoil', 'Lining, absorption'],
    answer: 1
  },
  {
    q: 'At the telophase stage of mitosis:',
    options: ['Pairs of chromatids divide and identical halves move to each end', 'The spindle fibres disintegrate and the centrioles replicate', 'Chromosomes arrange themselves at the centre of the cell', 'The cell is resting'],
    answer: 1
  },
  {
    q: 'Cancellous bone is found:',
    options: ['On the outside of short bones', 'In the shaft of long bones', 'In the ends of long bones', 'In an infected bone'],
    answer: 2
  },
  {
    q: 'The common name for a zygomatic bone is:',
    options: ['Jaw bone', 'Cheek bone', 'Forehead', 'Skull bone'],
    answer: 1
  },
  {
    q: 'The innominate bones are:',
    options: ['The clavicle and scapula', 'Sacrum and coccyx', 'Pubis and femur', 'Ilium and ischium'],
    answer: 3
  },
  {
    q: 'The bones of the cranium include:',
    options: ['Parietal, occipital', 'Palatine, nasal', 'Maxilla, zygomatic', 'Lacrimal, vomer'],
    answer: 0
  },
  {
    q: 'The elbow joint is a:',
    options: ['Pivot joint', 'Fixed joint', 'Hinge joint', 'Gliding joint'],
    answer: 2
  },
  {
    q: 'The functions of the adrenal medulla hormones include:',
    options: ['Regulation of salts in the body', 'Maintenance of calcium levels in plasma', 'Regulation of water absorption', "Prepares the body for 'fight or flight'"],
    answer: 3
  },
  {
    q: 'The endocrine system works closely with the nervous system to provide:',
    options: ['Homeopathy', 'Homeosapien', 'Homeostasis', 'Imbalance in the body'],
    answer: 2
  },
  {
    q: 'Hyposecretion of vasopressin includes:',
    options: ['Oedema', 'High blood pressure', 'Diabetes Insipidus', 'Low blood pressure'],
    answer: 2
  },
  {
    q: 'Hormones are carried in the:',
    options: ['Circulatory system', 'Lymphatic system', 'Nervous system', 'Respiratory system'],
    answer: 0
  },
  {
    q: 'Hypersecretion of thyroxine can cause:',
    options: ["Graves' disease", 'Myxoedema', 'Cretinism', 'Dwarfism'],
    answer: 0
  },
  {
    q: 'The function of the venules is to:',
    options: ['Carry oxygenated blood from the capillaries to the larger veins', 'Carry oxygenated blood from the larger veins to the capillaries', 'Carry deoxygenated blood from the capillaries to the larger veins', 'Carry deoxygenated blood from the larger veins to the capillaries'],
    answer: 2
  },
  {
    q: 'Thrombocytes are:',
    options: ['Cells that fight infection', 'Cells that transport oxygen as oxyhaemoglobin', 'Cells responsible for blood clotting', 'Cells that form collagen'],
    answer: 2
  },
  {
    q: 'Erythrocytes are:',
    options: ['Cells that fight infection', 'Cells that transport oxygen as oxyhaemoglobin', 'Cells responsible for blood clotting', 'Cells that form collagen'],
    answer: 1
  },
  {
    q: 'The function of thrombocytes is to:',
    options: ['Produce antibodies', 'Protect the body from infection', 'Eat bacteria and other micro-organisms', 'Clot the blood'],
    answer: 3
  },
  {
    q: 'The arteries and veins of the lower arm and hand include:',
    options: ['Digital, saphenous', 'Cephalic, basilic', 'Median, peroneal', 'Sciatic, humeral'],
    answer: 1
  },
  {
    q: 'Lymph is drained back into the bloodstream through the:',
    options: ['Lymphatic capillaries', 'Lymphatic nodes', 'Lymphatic ducts', 'Spleen'],
    answer: 2
  },
  {
    q: 'The functions of the spleen include:',
    options: ['Collect and drain lymph', 'Transport excess waste away from the tissues', 'Destroy thrombocytes', 'Destroy lymphocytes'],
    answer: 2
  },
  {
    q: 'The function of a lymph vessel is to:',
    options: ['Work with the blood to collect and distribute waste', 'Transport lymph to the arteries', 'Transport lymph', 'Transport lymph to the veins'],
    answer: 2
  },
  {
    q: 'Lymph flow is hindered by:',
    options: ['Muscular activity', 'Arterial pulsation', 'Infection', 'Peristaltic action'],
    answer: 2
  },
  {
    q: 'The cervical lymph nodes are situated:',
    options: ['In front of the ear', 'Behind the ear', 'Under the chin', 'On the neck'],
    answer: 3
  },
  {
    q: 'The part of the nervous system which works closely with the respiratory system for inhalation is the:',
    options: ['Cerebrum', 'Cerebellum', 'Medulla oblongata', 'Spinal cord'],
    answer: 2
  },
  {
    q: 'The sympathetic nervous system affects the heart by:',
    options: ['Accelerating the action of the heart', 'Constricting the flow of blood to the heart', 'Slowing down the action of the heart', 'Lowering blood pressure'],
    answer: 0
  },
  {
    q: 'The brachial nerves supply the:',
    options: ['Muscles of the neck, shoulder and skin', 'Skin and muscles of the lower abdomen, thighs and groin', 'Muscles from the base of the neck to the fingertips and skin', 'Chest muscles and the main part of the abdominal wall'],
    answer: 2
  },
  {
    q: 'Neuralgia can be defined as:',
    options: ['Shooting pains along the course of a nerve', 'Pain down the back and outside of the thigh', 'Disease of the basal ganglia', 'Paralysis or weakness of one side of the face'],
    answer: 0
  },
  {
    q: 'The muscular and nervous systems work together to:',
    options: ['Control and coordinate movement', 'Regulate body changes', 'Protect', 'Reproduce'],
    answer: 0
  },
  {
    q: 'In the proliferative phase of the menstrual cycle which hormone is produced:',
    options: ['Progesterone', 'Testosterone', 'Follicle stimulating', 'Luteinising'],
    answer: 2
  },
  {
    q: 'Amenorrhoea is defined as:',
    options: ['Constantly menstruating', 'Painful menstruation', 'Absence of menstruation', 'Very heavy menstruation'],
    answer: 2
  },
  {
    q: 'The function of the large intestine includes:',
    options: ['Ingestion', 'Indigestion', 'Digestion', 'Excretion'],
    answer: 3
  },
  {
    q: 'Lipase digests:',
    options: ['Starch', 'Proteins', 'Fats', 'Carbohydrates'],
    answer: 2
  },
  {
    q: 'Peptones are digested in the:',
    options: ['Stomach', 'Jejunum', 'Duodenum', 'Ileum'],
    answer: 2
  },
  {
    q: 'Emphysema is:',
    options: ['Inflammation of the lung tissue', 'Inflammation of the bronchial tubes', 'Inflammation of the pleural lining of the lungs', 'Loss of stretch and elasticity of the alveoli'],
    answer: 3
  },
  {
    q: 'The structure of the pleura is:',
    options: ['Yellow elastic connective tissue', 'Areolar tissue', 'Serous membrane', 'Columnar epithelium tissue'],
    answer: 2
  },
  {
    q: 'The functions of the trachea include:',
    options: ['A collection of foreign matter or bacteria by the goblet secretory cells', 'Act as a passageway between the larynx and pharynx', 'To moisten and warm the air', 'To allow exchange of gases to take place'],
    answer: 0
  },
  {
    q: "Define Bright's Disease:",
    options: ['Inflammation of the eye', 'Inflammation of the kidney', 'Inflammation of the bladder', 'Inflammation of the liver'],
    answer: 1
  },
  {
    q: 'Cystitis is defined as an:',
    options: ['Inflammation of the urethra', 'Inflammation of the kidney', 'Inflammation of the ureter', 'Inflammation of the bladder'],
    answer: 3
  },
  {
    q: "The causes of Addison's Syndrome are:",
    options: ['Hyposecretion of adrenocortical hormones', 'Hyposecretion of the female sex hormones', 'Hypersecretion of adrenocortical hormones', 'Hypersecretion of the female sex hormones'],
    answer: 0
  },
  {
    q: 'Oxygen is carried in the blood by:',
    options: ['Leucocytes', 'Thrombocytes', 'Erythrocytes', 'Lymphocytes'],
    answer: 2
  },
  {
    q: 'The effects on the digestive system of the parasympathetic nervous system include:',
    options: ['Increase in secretion of pancreatic juices, micturition', 'Increase in digestion, increase in secretion of pancreatic juices', 'Delay in digestion, inhibition of secretion of digestive juices', 'Inhibition of micturition, decrease in secretion of pancreatic juices'],
    answer: 1
  },
  {
    q: 'The knee joint is a:',
    options: ['Pivot joint', 'Hinge joint', 'Gliding joint', 'Ball and socket joint'],
    answer: 1
  },
  {
    q: 'Cystitis is defined as inflammation of the:',
    options: ['Urethra', 'Kidney', 'Ureter', 'Bladder'],
    answer: 3
  },
  {
    q: 'The enzyme trypsin can be found in the:',
    options: ['Juices from the pancreas', 'Bile from the gall bladder', 'Juices from the stomach', 'Bile from the liver'],
    answer: 0
  },
  {
    q: 'The tongue plays an important part in:',
    options: ['Digestion, mastication, swallowing', 'Ingestion, taste, digestion', 'Mastication, elimination, swallowing', 'Swallowing, mastication, taste'],
    answer: 3
  },
  {
    q: 'Ingestion takes place in the:',
    options: ['Stomach', 'Small intestine', 'Mouth', 'Large intestine'],
    answer: 2
  },
  {
    q: 'The action of pepsin is to:',
    options: ['Curdle milk', 'Break down proteins into peptones', 'Break down polypeptides into amino acids', 'Break down polysaccharides into disaccharides'],
    answer: 1
  },
  {
    q: 'A deficiency of Vitamin K causes:',
    options: ['Anaemia, lack of energy', 'Haemorrhage', 'Diarrhoea', 'Lack of energy'],
    answer: 2
  },
  {
    q: 'Which enzyme does hydrochloric acid activate?',
    options: ['Trypsin', 'Rennin', 'Lactase', 'Pepsin'],
    answer: 3
  },
  {
    q: 'At the interphase stage of mitosis:',
    options: ['Pairs of chromatids divide and identical halves move to each end', 'The spindle fibres disintegrate and the centrioles replicate', 'Chromosomes arrange themselves at the centre of the cell', 'The cell is resting'],
    answer: 3
  },
  {
    q: 'The function of adipose tissue is to:',
    options: ['Enable stretch and recoil', 'Connect and support other tissues', 'Protect and insulate the body', 'Help support and move the body'],
    answer: 2
  },
  {
    q: 'Areolar tissue is a type of:',
    options: ['Connective tissue', 'Epithelial tissue', 'Nervous tissue', 'Muscular tissue'],
    answer: 0
  },
  {
    q: 'Endoplasmic reticulum:',
    options: ['Is a protein factory', 'Forms a network of canals', 'Combines carbohydrates with protein compounds for energy', 'Releases energy and forms adenosine triphosphate'],
    answer: 1
  },
  {
    q: 'A ligament connects:',
    options: ['Bone to bone', 'Muscle to muscle', 'Muscle to bone', 'Muscle to skin'],
    answer: 0
  },
  {
    q: 'Lymph is drained back into the bloodstream through the:',
    options: ['Lymphatic capillaries', 'Lymphatic nodes', 'Lymphatic ducts', 'Spleen'],
    answer: 2
  },
  {
    q: 'The functions of the lymph nodes include:',
    options: ['Act as a biological filter', 'Increase water content of lymph', 'Transport oxygen', 'Regulate body temperature'],
    answer: 0
  },
  {
    q: 'The submandibular nodes are situated:',
    options: ['In front of the ear', 'Behind the ear', 'Under the jaw bone', 'On the neck'],
    answer: 2
  },
  {
    q: 'The function of a lymph vessel is to:',
    options: ['Work with blood to collect and distribute waste', 'Transport lymph to arteries', 'Transport lymph', 'Transport lymph to veins'],
    answer: 2
  },
  {
    q: 'The digestive and lymphatic systems work together to:',
    options: ['Aid in the digestion of carbohydrates', 'Aid the elimination of carbohydrates', 'Aid in the digestion of fats', 'Aid the elimination of fats'],
    answer: 2
  },
  {
    q: 'Control of the balance and co-ordination are functions of the:',
    options: ['Pons varolii', 'Cerebral cortex', 'Medulla oblongata', 'Cerebellum'],
    answer: 3
  },
  {
    q: 'The effects of the parasympathetic nervous system include:',
    options: ['Increase in the secretion of pancreatic juices, micturition, delay in digestion', 'Increase in digestion, increase in excretion of pancreatic juices, micturition', 'Delay in digestion, inhibition of secretion of digestive juices, inhibition of micturition', 'Increase in digestion, inhibition of micturition, decrease in secretion of pancreatic juices'],
    answer: 1
  },
  {
    q: 'The fifth cranial nerve is the:',
    options: ['Optic nerve', 'Trochlear nerve', 'Trigeminal nerve', 'Facial nerve'],
    answer: 2
  },
  {
    q: 'The nervous system overworks in times of stress causing:',
    options: ['Decreased heart rate', 'Low blood pressure', 'Sciatica', 'Muscle tension'],
    answer: 3
  },
  {
    q: 'The functions of the myelin sheath include:',
    options: ['To help regenerate nerve cells', 'To transmit nerve impulses away from the cell body', 'To speed up nerve conduction', 'To slow down nerve conduction'],
    answer: 2
  },
  {
    q: 'Which of the following statements is true?',
    options: ['The right lung consists of three distinct lobes', 'Tidal volume is greater than vital capacity', 'The pulmonary arteries carry oxygenated blood away from the lungs', 'The walls of the alveoli are lined with transitional epithelium'],
    answer: 0
  },
  {
    q: 'The trachea is made of:',
    options: ['Incomplete rings of yellow elastic tissue', 'Incomplete rings of hyaline cartilage', 'Complete rings of yellow elastic tissue', 'Complete rings of hyaline cartilage'],
    answer: 1
  },
  {
    q: 'Which of the following is not a function of the skin:',
    options: ['Waterproofing', 'Fat storage', 'Vitamin D production', 'Vitamin E production'],
    answer: 3
  },
  {
    q: 'The epidermis contains:',
    options: ['Hair papillae', 'Blood vessels', 'Melanocytes', 'Adipose cells'],
    answer: 2
  },
  {
    q: 'Acne vulgaris is:',
    options: ['Congenital', 'Viral', 'Fungal', 'Bacterial'],
    answer: 3
  },
  {
    q: 'Erythrocytes are cells that:',
    options: ['Fight infection', 'Transport oxygen as oxyhaemoglobin', 'Are responsible for blood clotting', 'Are cells that form collagen'],
    answer: 1
  },
  {
    q: 'The characteristics of arteries include:',
    options: ['Thick walled, small lumen', 'Transport blood to the heart', 'Thin walled, thick lumen', 'Thin walled, large lumen'],
    answer: 0
  },
  {
    q: 'The arteries and veins of the lower arm and hand include:',
    options: ['Digital, saphenous', 'Cephalic, basilic', 'Median, peroneal', 'Sciatic, humeral'],
    answer: 1
  },
  {
    q: 'The release of noradrenaline causes:',
    options: ['Vasoconstriction', 'Vasodilation', 'Dilation of muscle fibres', 'Accelerates conversion of glycogen to glucose'],
    answer: 0
  },
  {
    q: "The causes of Cushing's Disease include the:",
    options: ['Hyposecretion of glucocorticoid hormones', 'Hyposecretion of adrenocortical hormones', 'Hypersecretion of glucocorticoid hormones', 'Hypersecretion of adrenocortical hormones'],
    answer: 2
  },
  {
    q: 'The posterior lobe of the pituitary gland secretes the following hormones:',
    options: ['Oestrogen, prolactin', 'Corticosteroids, follicle stimulating', 'Thyrotropin, human growth', 'Vasopressin, oxytocin'],
    answer: 3
  },
  {
    q: 'Hypersecretion of the thyroid gland can cause:',
    options: ['Dwarfism', "Graves' disease", 'Cretinism', 'Myxoedema'],
    answer: 1
  },
  {
    q: 'Hormones are carried in the:',
    options: ['Circulatory system', 'Lymphatic system', 'Nervous system', 'Respiratory system'],
    answer: 0
  },
  {
    q: 'The action of the infraspinatus muscle is to:',
    options: ['Rotate the arm inwards', 'Adduct the arm', 'Rotate the arm outwards', 'Abduct the arm'],
    answer: 2
  },
  {
    q: 'Which of the following statements is true?',
    options: ['A concentric contraction involves shortening of the muscle', 'An eccentric contraction partially moves through a contraction', 'An isotonic contraction is a static contraction with no movement', 'An isometric contraction involves lengthening of a muscle'],
    answer: 0
  },
  {
    q: 'Define muscle fatigue:',
    options: ['Inability to relax a muscle', 'Inability of a muscle to contract', 'Inability of a muscle to sustain relaxation', 'Inability of a muscle to sustain a contraction'],
    answer: 3
  },
  {
    q: 'The origin of the sartorius muscle is:',
    options: ['Tuberosity of the ischium', 'Pubis', 'Linea aspera', 'Anterior superior iliac spine'],
    answer: 3
  },
  {
    q: 'The insertion of the trapezius muscle is:',
    options: ['Vertebral border of the scapula', 'Occipital bone and thoracic vertebrae', 'Clavicle and spine of scapula', 'Bicipital groove of the humerus'],
    answer: 2
  },
  {
    q: 'Which structure is common to both the urinary and reproductive system in the male?',
    options: ['Ureters', 'Testes', 'Urethra', 'Bladder'],
    answer: 2
  },
  {
    q: 'Lordosis is defined as:',
    options: ['Exaggerated inward curvature of the spine', 'Sideways curvature of the spine', 'Exaggerated outward curvature of the spine', 'Porosity and brittleness of bones'],
    answer: 0
  },
  {
    q: 'The bones of the cranium include:',
    options: ['Parietal, occipital', 'Palatine, nasal', 'Maxilla, zygomatic', 'Lacrimal, vomer'],
    answer: 0
  },
  {
    q: 'A saddle joint allows:',
    options: ['Flexion, extension, adduction, circumduction', 'No movement', 'Abduction, adduction, flexion, extension, rotation', 'Plantarflexion, extension, circumduction, supination'],
    answer: 0
  },
  {
    q: 'The minerals that bones store include:',
    options: ['Magnesium', 'Zinc', 'Phosphorus', 'Iron'],
    answer: 0
  },
  {
    q: 'Cancellous bone is found:',
    options: ['On the outside of short bones', 'In the shafts of long bones', 'In the ends of long bones', 'In infected bones'],
    answer: 2
  },
  {
    q: 'Define cystitis:',
    options: ['Inflammation of the urethra', 'Inflammation of the kidney', 'Inflammation of the ureter', 'Inflammation of the bladder'],
    answer: 3
  },
  {
    q: 'Which artery contains deoxygenated blood?',
    options: ['Aorta', 'Pulmonary', 'None', 'Saphenous'],
    answer: 1
  },
  {
    q: 'What is a small vein called?',
    options: ['Arteriole', 'Venule', 'Vena', 'Capillary'],
    answer: 1
  },
  {
    q: 'What blood vessels lead directly away from capillaries?',
    options: ['Arterioles', 'Lymph vessels', 'Veins', 'Venules'],
    answer: 3
  },
  {
    q: 'What vein drains the back of the head?',
    options: ['Palmar', 'Temporal', 'Mandibular', 'Occipital'],
    answer: 3
  },
  {
    q: 'Into what does the right lymphatic duct enter?',
    options: ['The heart', 'Right subscapular vein', 'Left subclavian vein', 'Right subclavian vein'],
    answer: 3
  },
  {
    q: 'What artery supplies the chin?',
    options: ['Temporal', 'Facial', 'Maxillary', 'Mandibular'],
    answer: 1
  },
  {
    q: 'What is the name of the aorta that heads down to the trunk?',
    options: ['Aortic arch', 'Mesenteric aorta', 'Descending aorta', 'Ascending aorta'],
    answer: 2
  },
  {
    q: 'Which blood vessel has the smallest lumen?',
    options: ['Venule', 'Artery', 'Vein', 'Capillary'],
    answer: 3
  },
  {
    q: 'Which blood vessel is the most elastic?',
    options: ['Vein', 'Artery', 'Arteriole', 'Venule'],
    answer: 1
  },
  {
    q: 'Which organ is supplied by the renal artery?',
    options: ['Spleen', 'Kidney', 'Liver', 'Stomach'],
    answer: 1
  },
  {
    q: 'How many red blood cells at a time can pass through capillaries?',
    options: ['One', '5,000,000', 'None', 'Two'],
    answer: 0
  },
  {
    q: 'By what process does CO2 pass from cells to the blood?',
    options: ['Pinocytosis', 'Diffusion', 'Osmosis', 'Phagocytosis'],
    answer: 1
  },
  {
    q: 'Which chamber of the heart pumps oxygenated blood around?',
    options: ['Bottom right', 'Top left', 'Top right', 'Bottom left'],
    answer: 3
  },
  {
    q: 'What blood vessels come from the lungs to the heart?',
    options: ['Pulmonary arteries', 'Pulmonary arteries and pulmonary veins', 'Pulmonary veins', 'Aorta'],
    answer: 2
  },
  {
    q: 'What type of blood do the pulmonary veins carry?',
    options: ['Rh negative', 'Deoxygenated', 'Oxygenated', 'Blue'],
    answer: 2
  },
  {
    q: 'The tunica adventitia makes up which layer of blood vessels?',
    options: ['Outer layer', 'Mid layer', 'Inner layer', 'Pericardium'],
    answer: 0
  },
  {
    q: 'The main wall of arteries and veins is made from which tissue?',
    options: ['Elastin', 'Fibrous collagen', 'Endothelium', 'Muscle and elastic'],
    answer: 3
  },
  {
    q: 'Which vein carries blood from the small intestine to the liver before going to the heart?',
    options: ['Pancreatic vein', 'Hepatic vein', 'Hepatic portal vein', 'Renal and hepatic vein'],
    answer: 2
  },
  {
    q: 'What name is given to small veins leaving the tissue?',
    options: ['Lymph capillaries', 'Lymphatics', 'Venules', 'Capillaries'],
    answer: 2
  },
  {
    q: 'The outer layer (tunica adventitia) of an artery is composed of what?',
    options: ['Epithelial tissue', 'Adipose tissue', 'Connective tissue', 'Nerve tissue'],
    answer: 2
  },
  {
    q: 'The inner layer of an artery called the tunica intima is composed of what?',
    options: ['Simple squamous epithelium', 'Adipose fat', 'Muscle tissue', 'Stratified squamous epithelium'],
    answer: 0
  },
  {
    q: 'The outer layer of an artery contains collagen and what other fibres?',
    options: ['Muscle fibres', 'Elastic fibres', 'Cartilage', 'Fat'],
    answer: 1
  },
  {
    q: 'The inner layer of an artery composed of simple squamous epithelium is called what?',
    options: ['Membrane', 'Varicose tissue', 'Serous membrane', 'Endothelium'],
    answer: 3
  },
  {
    q: 'Veins that lose their elasticity through stretching are said to be what?',
    options: ['Stretched', 'Elongated', 'Not elasticised', 'Varicose'],
    answer: 3
  },
  {
    q: 'Which white cells give rise to the immune response which involves a memory of an encounter?',
    options: ['All leucocytes', 'Erythrocytes', 'Lymphocytes', 'Thrombocytes'],
    answer: 2
  },
  {
    q: 'Which lymphocytes are produced in the bone marrow of an infant?',
    options: ['Red lymphocytes', 'T-lymphocytes', 'B-lymphocytes', 'Monocytes'],
    answer: 1
  },
  {
    q: 'T-lymphocytes mature into T-cells in which organ of the child?',
    options: ['Small intestine', 'Tonsils', 'Thymus gland', 'Spleen'],
    answer: 2
  },
  {
    q: 'Vaccines act as a harmless antigen to stimulate the production of what against a specific disease?',
    options: ['Neutrophils', 'Antibodies', 'Monocytes', 'Hormones'],
    answer: 1
  },
  {
    q: 'What does an antigen-antibody structure cause, when activating cells which produce histamine?',
    options: ['Red face', 'Paleness', 'Faint', 'Allergy'],
    answer: 3
  },
  {
    q: 'What do we call an intense allergic reaction that can cause collapse or death?',
    options: ['Autoimmune reaction', 'Anaphylactic reaction', 'A reflex action', "Cushing's syndrome"],
    answer: 1
  },
  {
    q: 'What type of immunity involves administering antibodies produced by someone else?',
    options: ['Passive immunity', 'Active immunity', 'Natural immunity', 'Acquired immunity'],
    answer: 0
  },
  {
    q: 'What type of immunity involves producing immunity by stimulating antibodies to vaccines?',
    options: ['Active immunity', 'Acquired immunity', 'Passive immunity', 'Natural immunity'],
    answer: 0
  },
  {
    q: 'Antibodies that have been produced in response to exposure to the actual disease is known as what?',
    options: ['Passive immunity', 'Active immunity', 'Natural immunity', 'Acquired immunity'],
    answer: 2
  },
  {
    q: 'What type of immunity indicates that protection has been brought about by vaccination?',
    options: ['Acquired immunity', 'Natural immunity', 'Active immunity', 'Passive immunity'],
    answer: 0
  },
  {
    q: 'Which lymph organ destroys bacteria and worn out red blood cells and platelets?',
    options: ["Peyer's patches", 'Liver', 'Thoracic duct', 'Spleen'],
    answer: 3
  },
  {
    q: 'What disease is characterised by the body not recognising some of its own chemical structures?',
    options: ["Hodgkin's disease", 'Lymphoma', 'Cancer', 'Autoimmune disease'],
    answer: 3
  },
  {
    q: 'What antibodies does group A blood plasma carry?',
    options: ['Anti-A antibodies', 'Anti-B antibodies', 'Anti-A and B antibodies', 'Neither'],
    answer: 1
  },
  {
    q: "Which blood group's plasma carries both anti-A and anti-B antibodies?",
    options: ['Group A', 'Group A and B', 'Group O', 'Group AB'],
    answer: 2
  },
  {
    q: 'If during blood transfusion group A is given to a person with group B or group O the transfusion will be what?',
    options: ['Successful', 'Red cells of both groups will be damaged', 'Only the patient from group B will be damaged', 'Only the patient from group O will be damaged'],
    answer: 1
  },
  {
    q: 'What blood group has B present but A absent?',
    options: ['Group AB', 'Group A', 'Group B', 'Group O'],
    answer: 2
  },
  {
    q: 'What special factor or antigen do most people carry?',
    options: ['Factor C', 'Blue blood', 'Rhesus factor', 'Anti-D'],
    answer: 2
  },
  {
    q: 'People who carry the rhesus antigen are said to be what?',
    options: ['Rh positive', 'Rh negative', 'Haemophiliacs', 'Carrying hepatitis'],
    answer: 0
  },
  {
    q: 'Which membrane containing a watery fluid surrounds the heart?',
    options: ['Cardiac notch', 'Endocardium', 'Pericardium', 'Cardiac sphincter'],
    answer: 2
  },
  {
    q: 'Of what type of tissue is the heart mainly composed?',
    options: ['Connective', 'Voluntary', 'Cardiac muscle tissue', 'Visceral'],
    answer: 2
  },
  {
    q: 'What is plasma occurring outside of the blood vessels known as?',
    options: ['Tissue fluid', 'Serum', 'Lymph', 'Factor D'],
    answer: 0
  },
  {
    q: 'What is tissue fluid inside a lymphatic capillary called?',
    options: ['Capillary tissue fluid', 'Chyle', 'Lymph', 'Lymph ducts'],
    answer: 2
  },
  {
    q: 'What structures help to drain excess fluid and waste products from the tissue spaces?',
    options: ['Lymph nodes', 'Lymph vessels', 'Lymph capillaries', 'Lymph ducts'],
    answer: 2
  },
  {
    q: 'What filter out ingested bacteria and other potentially dangerous foreign bodies from lymph?',
    options: ['Lymph nodes', 'Lymphatics', 'Thymus glands', 'Chyle'],
    answer: 0
  },
  {
    q: 'What is present to make lymphatic vessels appear to be knotted?',
    options: ['Clotting agent', 'Bacteria', 'Lymph valves', 'Lymph nodes'],
    answer: 2
  },
  {
    q: 'What name is given to the two major drainage vessels of the lymph system?',
    options: ['The thoracic ducts', 'Right lymphatic duct', 'Right lymph duct and thoracic duct', 'Cisterna chyli'],
    answer: 2
  },
  {
    q: 'Which lymphatic duct drains the left side of the body including both legs?',
    options: ['Left lymphatic duct', 'Right thoracic duct', 'Right lymphatic duct', 'Thoracic duct'],
    answer: 3
  },
  {
    q: 'The thoracic duct begins at a swollen sac called what?',
    options: ["Peyer's patches", 'Cisterna chyli', 'Axillary node', 'Inguinal node'],
    answer: 1
  },
  {
    q: 'Into what does the thoracic duct empty?',
    options: ['Right subclavian vein', 'Left subclavian vein', 'Carotid artery', 'Internal jugular veins'],
    answer: 1
  },
  {
    q: 'The subclavian veins are beneath which bones?',
    options: ['Vertebrae', 'Sternum and ribs', 'Scapula', 'Collar bones'],
    answer: 3
  },
  {
    q: 'The flow of lymph from tissue to large lymphatic ducts is mainly due to the action of what?',
    options: ['Expiration', 'Skeletal muscles', 'Hormones', 'Heart rate'],
    answer: 1
  },
  {
    q: 'How long do cells from the stratum germinativum take to reach the surface of the skin?',
    options: ['5 - 7 days', '12 - 14 days', '19 - 21 days', '28 - 30 days'],
    answer: 3
  },
  {
    q: 'Which skin condition is characterised by irregular areas of increased pigmentation often as a result of pregnancy?',
    options: ['Vitiligo', 'Chloasma', 'Papilloma', 'Erythema'],
    answer: 1
  },
  {
    q: 'Which of the following can be found in the epidermis?',
    options: ['Lymph vessels', 'Elastin', 'Melanocytes', 'Sweat glands'],
    answer: 2
  },
  {
    q: 'The skin has the ability to absorb which of the following?',
    options: ['Mineral oils', 'Chemical substances', 'Water', 'Aqueous oils'],
    answer: 1
  },
  {
    q: 'The cells containing keratin can be found in which layer of the skin?',
    options: ['Stratum spinosum', 'Stratum germinativum', 'Stratum granulosum', 'Dermis'],
    answer: 2
  },
  {
    q: 'The action of the orbicularis oris is to do what?',
    options: ['Close the eyes', 'Pout lips as in kissing', 'Draw the eyebrows inwards', 'Smile'],
    answer: 1
  },
  {
    q: 'Which muscle lies deep to gastrocnemius?',
    options: ['Tibialis anterior', 'Peroneus longus', 'Soleus', 'Extensor digitorum longus'],
    answer: 2
  },
  {
    q: 'The hamstring muscles are comprised of which group?',
    options: ['Rectus femoris, semitendinosus and semimembranosus', 'Biceps femoris, semimembranosus and semitendinosus', 'Adductor brevis, adductor longus and adductor magnus', 'Rectus femoris, vastus lateralis and vastus medialis'],
    answer: 1
  },
  {
    q: 'Atrophy is defined as which of the following?',
    options: ['Lack of muscle tone or tension in a muscle', 'Painful localised and involuntary contraction of one or more muscles', 'Muscle fibres contracting for much longer than necessary, wasting away', 'Failure to reach normal size or bulk of muscle'],
    answer: 3
  },
  {
    q: 'A ligament performs which function?',
    options: ['Connects bone to bone', 'Connects muscle to bone', 'Connects muscle to ligaments', 'Connects bone to ligaments'],
    answer: 0
  },
  {
    q: 'The endoplasmic reticulum performs which role?',
    options: ['Forms protein', 'Forms network of canals', 'Releases energy in the form of ATP', 'Carries chromosomes'],
    answer: 1
  },
  {
    q: 'Areolar tissue is a type of which tissue?',
    options: ['Nervous tissue', 'Epithelial tissue', 'Connective tissue', 'Muscular tissue'],
    answer: 2
  },
  {
    q: 'Hyaline cartilage performs which of the following functions?',
    options: ['Reduces friction and absorbs shock at joints', 'Is flexible and readily springs back into shape', 'Enables organs to slide freely against each other to prevent friction', 'Cushions and lubricates the ends of bones'],
    answer: 0
  },
  {
    q: 'At the telophase stage of mitosis, what occurs?',
    options: ['The centrosome divides into two centrioles', 'The spindle fibres disintegrate and the centrioles replicate', 'The centrosomes arrange themselves at the centre of the cell', 'The cell is resting'],
    answer: 1
  },
  {
    q: 'Ciliated epithelium is found in which location?',
    options: ['Lines most of the digestive tract', 'Lines the bladder and ureters', 'Forms the top five layers of the skin', 'Lines the respiratory passages'],
    answer: 3
  },
  {
    q: 'The innominate bones consist of which parts?',
    options: ['Clavicle and scapula', 'Sacrum and coccyx', 'Pubis', 'Ilium and ischium'],
    answer: 3
  },
  {
    q: 'The bones of the cranium include which of the following?',
    options: ['Parietal and occipital', 'Palatine and nasal', 'Maxilla and zygomatic', 'Lacrimal and vomer'],
    answer: 0
  },
  {
    q: 'The shoulder joint is classified as what type of joint?',
    options: ['Saddle joint', 'Gliding joint', 'Ball and socket joint', 'Hinge joint'],
    answer: 2
  },
  {
    q: 'Cancellous bone is found in which location?',
    options: ['On the outside of short bones', 'In the shaft of long bones', 'In the ends of long bones', 'In an infected bone'],
    answer: 2
  },
  {
    q: 'Which of these is part of the appendicular skeleton?',
    options: ['Skull', 'Vertebral column', 'Ribs', 'Pelvic girdle'],
    answer: 3
  },
  {
    q: 'The endocrine system works closely with the nervous system to provide what?',
    options: ['Homeostasis', 'Homeopathy', 'Imbalance in the body', 'Homo sapiens'],
    answer: 0
  },
  {
    q: 'Hyposecretion of vasopressin causes which condition?',
    options: ['Oedema', 'High blood pressure', 'Diabetes insipidus', 'Low blood pressure'],
    answer: 2
  },
  {
    q: 'Hormones are carried in which system?',
    options: ['Circulatory system', 'Lymphatic system', 'Nervous system', 'Respiratory system'],
    answer: 0
  },
  {
    q: 'Hypersecretion of glucocorticoids causes which condition?',
    options: ["Addison's disease", "Cushing's syndrome", 'Polycystic ovaries', 'Hirsutism'],
    answer: 1
  },
  {
    q: 'The pancreas secretes hormones which perform which function?',
    options: ['Regulate water absorption', 'Regulate mineral balance', 'Regulate calcium balance', 'Regulate glucose balance'],
    answer: 3
  },
  {
    q: 'Thrombocytes are defined as which of the following?',
    options: ['Cells that fight infection', 'Cells that transport oxygen as oxyhaemoglobin', 'Cells responsible for clotting', 'Cells that form collagen'],
    answer: 2
  },
  {
    q: 'The arteries and veins of the lower arm and hand include which of the following?',
    options: ['Digital and saphenous', 'Cephalic and basilic', 'Median and sciatic', 'Humeral and radial'],
    answer: 1
  },
  {
    q: 'Arteriosclerosis is defined as which of the following?',
    options: ['A build-up of fats inside the arteries', 'A degenerative disease of the arteries', 'Reduction in the ability to carry oxygen', "The blood's inability to clot"],
    answer: 1
  },
  {
    q: 'Arteries have which of the following characteristics?',
    options: ['Carry oxygenated blood and have thick muscular walls', 'Carry deoxygenated blood and have thick muscular walls', 'Lie deep in the tissues and contain valves', 'Run alongside veins and have thin walls'],
    answer: 0
  },
  {
    q: 'The function of venules is to do what?',
    options: ['Carry oxygenated blood from the capillaries to the larger veins', 'Carry oxygenated blood from the larger veins to the capillaries', 'Carry deoxygenated blood from the capillaries to the larger veins', 'Carry deoxygenated blood from the larger veins to the capillaries'],
    answer: 2
  },
  {
    q: 'The lymphatic nodes located in the crease of the elbow are called what?',
    options: ['Auricular nodes', 'Supratrochlear nodes', 'Submandibular nodes', 'Inguinal nodes'],
    answer: 1
  },
  {
    q: 'Lymph is drained back into the bloodstream through which structures?',
    options: ['Spleen', 'Lymphatic nodes', 'Lymphatic capillaries', 'Lymphatic ducts'],
    answer: 3
  },
  {
    q: 'The function of the lacteals in the lining of the small intestine is to do what?',
    options: ['Carry digested fat', 'Absorb water', 'Filter lymph', 'Make lymphocytes'],
    answer: 0
  },
  {
    q: 'Which of the following areas contain lymphatic tissue?',
    options: ['Tonsils and appendix', 'Appendix and liver', 'Tonsils and adrenal glands', 'Adrenal glands and spleen'],
    answer: 0
  },
  {
    q: 'The functions of the spleen include which of the following?',
    options: ['Collect and drain lymph', 'Transport excess waste away from the tissue', 'Destroy thrombocytes', 'Destroy lymphocytes'],
    answer: 2
  },
  {
    q: 'The part of the nervous system which works closely with the respiratory system for inhalation is what?',
    options: ['Spinal cord', 'Cerebrum', 'Cerebellum', 'Medulla oblongata'],
    answer: 3
  },
  {
    q: 'The brachial nerves supply which area?',
    options: ['Chest muscles and the main part of the abdominal wall', 'Skin and muscles of the lower abdomen, thighs and groin', 'Muscles and skin from the base of the neck to the fingertips', 'Muscles and skin of the neck and shoulder'],
    answer: 2
  },
  {
    q: 'Which one of the following is the fatty covering of an axon?',
    options: ['Neuroglia', 'Neurilemma', 'Myelin sheath', 'Adipose tissue'],
    answer: 2
  },
  {
    q: 'White matter is found in which location?',
    options: ['On the outside of the brain and inside of the spinal cord', 'On the outside of the brain only', 'On the inside of the brain and outside of the spinal cord', 'On the outside of the spinal cord only'],
    answer: 2
  },
  {
    q: "Bell's palsy is defined as which of the following?",
    options: ['Bouts of burning or stabbing pain along the nerve', 'Pain down the back and outside of the thigh', 'Facial paralysis caused by injury or infection of the facial nerve', 'Blood poisoning'],
    answer: 2
  },
  {
    q: 'Which one of the following is a function of the vas deferens?',
    options: ['Acts as a passageway for sperm', 'Carries testosterone to the bloodstream', 'Acts as a site for immature sperm to develop', 'Acts as a passageway for semen and urine'],
    answer: 0
  },
  {
    q: 'Human ovulation normally occurs every how many days?',
    options: ['14 days', '28 days', '40 days', '60 days'],
    answer: 1
  },
  {
    q: 'The functions of the large intestine include which of the following?',
    options: ['Ingestion', 'Indigestion', 'Digestion', 'Excretion'],
    answer: 3
  },
  {
    q: 'Trypsin digests which of the following?',
    options: ['Starch', 'Proteins', 'Fats', 'Carbohydrates'],
    answer: 1
  },
  {
    q: 'Peptones are digested in which location?',
    options: ['Stomach', 'Jejunum', 'Duodenum', 'Ileum'],
    answer: 0
  },
  {
    q: 'The epiglottis performs which action?',
    options: ['Closes the trachea when swallowing', 'Closes the oesophagus during breathing', 'Prevents the trachea from collapsing', 'Closes the nasal cavity when swallowing'],
    answer: 0
  },
  {
    q: 'The membranes surrounding the lungs comprise which of the following?',
    options: ['The pericardium', 'Periosteum', 'Pleura', 'Perichondrium'],
    answer: 2
  },
  {
    q: 'Emphysema is characterised by which of the following?',
    options: ['Inflammation of the lung tissue', 'Inflammation of the bronchial tubes', 'Inflammation of the pleural lining of the lungs', 'Loss of stretch and elasticity of the alveoli'],
    answer: 3
  },
  {
    q: 'Which of the following is the part of the kidney which acts as a filter?',
    options: ['Loop of Henle', 'Glomerular capsule', 'Collecting tubule', 'The renal pelvis'],
    answer: 1
  },
  {
    q: 'Another name for nephritis is what?',
    options: ["Addison's disease", 'Cystitis', "Bright's disease", 'S.A.D.'],
    answer: 2
  },
  {
    q: 'Which part of the cell is responsible for producing energy in the form of ATP?',
    options: ['Nucleus', 'Ribosomes', 'Mitochondria', 'Golgi apparatus'],
    answer: 2
  },
  {
    q: 'Which layer of the epidermis is responsible for constant cell division (mitosis)?',
    options: ['Stratum corneum', 'Stratum germinativum', 'Stratum lucidum', 'Stratum granulosum'],
    answer: 1
  },
  {
    q: 'What is the common name for the zygomatic bone?',
    options: ['Jaw bone', 'Forehead bone', 'Collar bone', 'Cheek bone'],
    answer: 3
  },
  {
    q: 'Which muscle is responsible for flexing the elbow joint?',
    options: ['Triceps brachii', 'Biceps brachii', 'Deltoid', 'Trapezius'],
    answer: 1
  },
  {
    q: "Which part of the nervous system is responsible for the 'fight or flight' response?",
    options: ['Parasympathetic nervous system', 'Somatic nervous system', 'Sympathetic nervous system', 'Central nervous system'],
    answer: 2
  },
  {
    q: 'Which hormone is produced by the Islets of Langerhans in the pancreas to lower blood sugar levels?',
    options: ['Insulin', 'Glucagon', 'Adrenaline', 'Thyroxine'],
    answer: 0
  },
  {
    q: 'Which blood vessel carries deoxygenated blood from the heart to the lungs?',
    options: ['Aorta', 'Pulmonary artery', 'Pulmonary vein', 'Vena cava'],
    answer: 1
  },
  {
    q: 'What is the primary function of lymph nodes?',
    options: ['To pump lymph fluid through the body', 'To produce red blood cells', 'To filter out toxins and pathogens', 'To store bile'],
    answer: 2
  },
  {
    q: 'In which part of the digestive system does the majority of nutrient absorption take place?',
    options: ['Stomach', 'Large intestine', 'Small intestine', 'Oesophagus'],
    answer: 2
  },
  {
    q: 'What is the structural and functional unit of the kidney responsible for filtering blood?',
    options: ['Neurone', 'Nephron', 'Alveoli', 'Ureter'],
    answer: 1
  },
  {
    q: 'Which hormone is primarily responsible for the development of female secondary sexual characteristics?',
    options: ['Testosterone', 'Progesterone', 'Oestrogen', 'Prolactin'],
    answer: 2
  },
  {
    q: "What is the medical term for the 'true skin' which contains blood vessels and nerves?",
    options: ['Epidermis', 'Dermis', 'Hypodermis', 'Corneum'],
    answer: 1
  },
  {
    q: 'Which type of joint allows for the greatest range of movement, such as in the shoulder?',
    options: ['Hinge joint', 'Ball and socket joint', 'Gliding joint', 'Pivot joint'],
    answer: 1
  },
  {
    q: 'Which muscle is found on the posterior (back) of the lower leg and helps with plantarflexion?',
    options: ['Tibialis anterior', 'Gastrocnemius', 'Quadriceps', 'Hamstrings'],
    answer: 1
  },
  {
    q: 'What is the function of the myelin sheath in the nervous system?',
    options: ['To produce neurotransmitters', 'To protect the brain from shock', 'To increase the speed of nerve impulse transmission', 'To connect the brain hemispheres'],
    answer: 2
  },
  {
    q: "Which gland is known as the 'master gland' because it controls other endocrine glands?",
    options: ['Thyroid gland', 'Pituitary gland', 'Adrenal gland', 'Pineal gland'],
    answer: 1
  },
  {
    q: 'What are the smallest blood vessels where gas and nutrient exchange occurs?',
    options: ['Arteries', 'Veins', 'Capillaries', 'Arterioles'],
    answer: 2
  },
  {
    q: "Which lymphatic organ is responsible for 'recycling' old red blood cells?",
    options: ['Thymus', 'Spleen', 'Tonsils', 'Thoracic duct'],
    answer: 1
  },
  {
    q: 'What is the term for the wave-like muscular contractions that move food through the digestive tract?',
    options: ['Mastication', 'Emulsification', 'Peristalsis', 'Absorption'],
    answer: 2
  },
  {
    q: 'Which tube connects the urinary bladder to the outside of the body?',
    options: ['Ureter', 'Urethra', 'Renal pelvis', 'Nephron'],
    answer: 1
  },
  {
    q: 'In the male reproductive system, where are sperm cells produced?',
    options: ['Testes', 'Prostate gland', 'Vas deferens', 'Seminal vesicles'],
    answer: 0
  },
  {
    q: 'What is the function of melanocytes in the skin?',
    options: ['To provide waterproof protection', 'To produce pigment that protects against UV radiation', 'To sense touch and pressure', 'To produce sebum'],
    answer: 1
  },
  {
    q: 'Which part of the skeletal system consists of the skull, vertebral column, and rib cage?',
    options: ['Appendicular skeleton', 'Axial skeleton', 'Cervical skeleton', 'Thoracic skeleton'],
    answer: 1
  },
  {
    q: 'What is the name of the connective tissue that attaches muscle to bone?',
    options: ['Ligament', 'Tendon', 'Cartilage', 'Fascia'],
    answer: 1
  },
  {
    q: 'Which neurotransmitter is primarily involved in the transmission of signals at the neuromuscular junction?',
    options: ['Dopamine', 'Serotonin', 'Acetylcholine', 'Adrenaline'],
    answer: 2
  },
  {
    q: "Which hormone regulates the body's basal metabolic rate?",
    options: ['Thyroxine', 'Oxytocin', 'Calcitonin', 'Cortisol'],
    answer: 0
  },
  {
    q: 'Which chamber of the heart receives oxygenated blood from the lungs?',
    options: ['Right Atrium', 'Left Atrium', 'Right Ventricle', 'Left Ventricle'],
    answer: 1
  },
  {
    q: 'What is the largest lymphatic vessel in the body?',
    options: ['Right lymphatic duct', 'Thoracic duct', 'Cisterna chyli', 'Aorta'],
    answer: 1
  },
  {
    q: 'Where is bile produced in the body?',
    options: ['Gallbladder', 'Pancreas', 'Liver', 'Duodenum'],
    answer: 2
  },
  {
    q: 'Which of the following is a normal constituent of urine?',
    options: ['Glucose', 'Red blood cells', 'Urea', 'Proteins'],
    answer: 2
  },
  {
    q: 'What is the function of the fallopian tubes?',
    options: ['To produce eggs', 'To provide a site for fertilisation and transport the egg', 'To house the developing foetus', 'To produce oestrogen'],
    answer: 1
  },
  {
    q: 'Which skin condition is characterised by silvery scales and red, itchy patches?',
    options: ['Eczema', 'Psoriasis', 'Acne', 'Impetigo'],
    answer: 1
  },
  {
    q: "Which of the following bones is found in the lower arm on the 'thumb side'?",
    options: ['Ulna', 'Humerus', 'Radius', 'Fibula'],
    answer: 2
  },
  {
    q: "Which muscle is known as the 'tailor's muscle' and is the longest muscle in the body?",
    options: ['Rectus femoris', 'Sartorius', 'Gracilis', 'Gluteus maximus'],
    answer: 1
  },
  {
    q: 'Which cranial nerve is responsible for the sense of smell?',
    options: ['Optic nerve', 'Oculomotor nerve', 'Olfactory nerve', 'Trigeminal nerve'],
    answer: 2
  },
  {
    q: 'What is the function of the mineralocorticoid hormones produced by the adrenal cortex?',
    options: ['To regulate blood glucose', 'To regulate salt and water balance', 'To trigger fight or flight', 'To produce red blood cells'],
    answer: 1
  },
  {
    q: "In the cardiac cycle, what does 'systole' refer to?",
    options: ['The relaxation phase of the heart', 'The contraction phase of the heart', 'The sound of valves closing', 'The electrical signal start'],
    answer: 1
  },
  {
    q: 'What is the main function of the thymus gland?',
    options: ['To produce antibodies', 'To store vitamin B12', 'To provide a site for T-lymphocyte maturation', 'To regulate calcium'],
    answer: 2
  },
  {
    q: 'Which enzyme in the stomach begins the digestion of proteins?',
    options: ['Amylase', 'Lipase', 'Pepsin', 'Trypsin'],
    answer: 2
  },
  {
    q: 'What is the function of the bladder?',
    options: ['To filter blood', 'To store urine until it is excreted', 'To produce renin', 'To reabsorb water'],
    answer: 1
  },
  {
    q: "What is the name of the 'yellow body' that forms in the ovary after ovulation and secretes progesterone?",
    options: ['Graafian follicle', 'Corpus luteum', 'Endometrium', 'Cervix'],
    answer: 1
  },
  {
    q: 'Which of the following is an appendage of the skin?',
    options: ['Arrector pili muscle', 'Adipose tissue', 'Basal layer', 'Melanin'],
    answer: 0
  },
  {
    q: 'What type of bone is the patella (kneecap)?',
    options: ['Long bone', 'Sesamoid bone', 'Irregular bone', 'Flat bone'],
    answer: 1
  },
  {
    q: 'Which muscle is found on the side of the neck and is responsible for turning the head?',
    options: ['Pectoralis major', 'Latissimus dorsi', 'Sternocleidomastoid', 'Masseter'],
    answer: 2
  },
  {
    q: 'What is the function of the cerebellum?',
    options: ['To control higher-order thinking', 'To coordinate balance, posture, and fine motor skills', 'To regulate breathing', 'To act as a sensory relay station'],
    answer: 1
  },
  {
    q: 'Which hormone from the posterior pituitary gland regulates water reabsorption in the kidneys?',
    options: ['Anti-diuretic hormone (ADH)', 'Growth hormone', 'Luteinizing hormone', 'Melatonin'],
    answer: 0
  },
  {
    q: 'What is the liquid portion of the blood called?',
    options: ['Serum', 'Plasma', 'Lymph', 'Haemoglobin'],
    answer: 1
  },
  {
    q: 'Which type of immunity is acquired when a person is given a vaccine?',
    options: ['Natural active immunity', 'Artificial active immunity', 'Natural passive immunity', 'Artificial passive immunity'],
    answer: 1
  },
  {
    q: 'Where does the chemical digestion of carbohydrates begin?',
    options: ['Mouth', 'Stomach', 'Small intestine', 'Oesophagus'],
    answer: 0
  },
  {
    q: 'What is the common name for the scapula bone?',
    options: ['Collar bone', 'Breast bone', 'Shoulder blade', 'Shin bone'],
    answer: 2
  },
  {
    q: 'Which organelle is responsible for the production of ATP?',
    options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Lysosome'],
    answer: 1
  },
  {
    q: 'What is the primary function of the cell membrane?',
    options: ['To control the entry and exit of substances', 'To store hereditary information', 'To synthesise lipids', 'To provide rigid structural support'],
    answer: 0
  },
  {
    q: 'During which phase of mitosis do the chromatids pull apart and move toward opposite poles?',
    options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
    answer: 2
  },
  {
    q: 'Which of the following is a type of loose connective tissue?',
    options: ['Squamous epithelium', 'Areolar', 'Myocardium', 'Neurone'],
    answer: 1
  },
  {
    q: 'The axial skeleton includes which of the following bones?',
    options: ['Femur', 'Scapula', 'Sternum', 'Humerus'],
    answer: 2
  },
  {
    q: 'What is the name of the bone cells responsible for the breakdown of bone tissue?',
    options: ['Osteoblasts', 'Osteocytes', 'Osteoclasts', 'Chondrocytes'],
    answer: 2
  },
  {
    q: 'The joint between the humerus and the scapula is an example of what type of joint?',
    options: ['Hinge', 'Ball and socket', 'Pivot', 'Gliding'],
    answer: 1
  },
  {
    q: 'How many cervical vertebrae are found in the human vertebral column?',
    options: ['5', '7', '12', '4'],
    answer: 1
  },
  {
    q: "Which of the following is an example of a 'long bone'?",
    options: ['Carpals', 'Humerus', 'Sternum', 'Vertebrae'],
    answer: 1
  },
  {
    q: 'The tough, fibrous tissue that covers the outside of a bone is the:',
    options: ['Endosteum', 'Periosteum', 'Synovial membrane', 'Epiphysis'],
    answer: 1
  },
  {
    q: 'What is the function of red bone marrow?',
    options: ['To store fat', 'To produce blood cells', 'To provide rigid support', 'To secrete growth hormones'],
    answer: 1
  },
  {
    q: "Which bone is commonly known as the 'shoulder blade'?",
    options: ['Clavicle', 'Scapula', 'Sternum', 'Radius'],
    answer: 1
  },
  {
    q: 'Which muscle is the primary mover (agonist) for elbow flexion?',
    options: ['Triceps brachii', 'Biceps brachii', 'Deltoid', 'Pectoralis major'],
    answer: 1
  },
  {
    q: 'What is the name of the connective tissue that attaches muscle to bone?',
    options: ['Ligament', 'Tendon', 'Cartilage', 'Aponeurosis'],
    answer: 1
  },
  {
    q: "Which of the following describes 'isometric' muscle contraction?",
    options: ['The muscle shortens', 'The muscle lengthens', 'The muscle length remains constant while tension increases', 'The muscle relaxes completely'],
    answer: 2
  },
  {
    q: 'Where is the gastrocnemius muscle located?',
    options: ['The thigh', 'The lower back', 'The posterior lower leg', 'The upper arm'],
    answer: 2
  },
  {
    q: "What occurs when a muscle 'atrophies'?",
    options: ['The muscle grows larger', 'The muscle fibres waste away or shrink', 'The muscle remains in partial contraction', 'The muscle becomes more flexible'],
    answer: 1
  },
  {
    q: 'Which muscle group is located on the anterior thigh?',
    options: ['Hamstrings', 'Quadriceps', 'Adductors', 'Abductors'],
    answer: 1
  },
  {
    q: "The 'latissimus dorsi' muscle is primarily involved in:",
    options: ['Flexion of the neck', 'Adduction and extension of the arm', 'Elevation of the eyebrows', 'Flexion of the hip'],
    answer: 1
  },
  {
    q: 'What type of muscle is found in the walls of the stomach?',
    options: ['Skeletal', 'Cardiac', 'Smooth', 'Striated'],
    answer: 2
  },
  {
    q: 'The movement of a limb toward the midline of the body is called:',
    options: ['Abduction', 'Adduction', 'Circumduction', 'Rotation'],
    answer: 1
  },
  {
    q: 'Which part of a neurone receives incoming signals?',
    options: ['Axon', 'Dendrites', 'Myelin sheath', 'Synapse'],
    answer: 1
  },
  {
    q: 'The autonomic nervous system is divided into which two branches?',
    options: ['Central and peripheral', 'Sensory and motor', 'Sympathetic and parasympathetic', 'Somatic and visceral'],
    answer: 2
  },
  {
    q: 'Which part of the brain is responsible for balance and posture?',
    options: ['Cerebrum', 'Medulla oblongata', 'Cerebellum', 'Thalamus'],
    answer: 2
  },
  {
    q: 'What is the protective outer layer of the brain and spinal cord called?',
    options: ['Meninges', 'Periosteum', 'Pericardium', 'Pleura'],
    answer: 0
  },
  {
    q: "Which branch of the nervous system is active during 'rest and digest'?",
    options: ['Sympathetic', 'Parasympathetic', 'Somatic', 'Central'],
    answer: 1
  },
  {
    q: 'What is the insulating material that covers many axons?',
    options: ['Synapse', 'Neurolemma', 'Myelin', 'Dendrite'],
    answer: 2
  },
  {
    q: 'Which nerve is the longest in the human body?',
    options: ['Vagus nerve', 'Sciatic nerve', 'Ulnar nerve', 'Femoral nerve'],
    answer: 1
  },
  {
    q: 'Which endocrine gland secretes melatonin?',
    options: ['Thyroid', 'Pineal gland', 'Adrenal gland', 'Pituitary gland'],
    answer: 1
  },
  {
    q: 'What is the function of the hormone insulin?',
    options: ['To increase blood sugar levels', 'To lower blood sugar levels', 'To stimulate milk production', 'To regulate calcium'],
    answer: 1
  },
  {
    q: "Which gland is considered the 'master gland'?",
    options: ['Hypothalamus', 'Pituitary gland', 'Thymus', 'Pancreas'],
    answer: 1
  },
  {
    q: 'Which hormone is produced by the adrenal medulla during stress?',
    options: ['Cortisol', 'Adrenaline (epinephrine)', 'Aldosterone', 'Oestrogen'],
    answer: 1
  },
  {
    q: "Which hormone regulates the body's metabolic rate?",
    options: ['Insulin', 'Thyroxine', 'Glucagon', 'Calcitonin'],
    answer: 1
  },
  {
    q: 'Which hormone is secreted by the parathyroid glands?',
    options: ['Thyroxine', 'Parathyroid hormone (PTH)', 'Cortisol', 'Growth hormone'],
    answer: 1
  },
  {
    q: "The 'islets of Langerhans' are found in which organ?",
    options: ['Liver', 'Pancreas', 'Kidney', 'Adrenal gland'],
    answer: 1
  },
  {
    q: 'Which chamber of the heart receives deoxygenated blood from the body?',
    options: ['Left atrium', 'Right atrium', 'Left ventricle', 'Right ventricle'],
    answer: 1
  },
  {
    q: 'Which blood vessels have the thinnest walls?',
    options: ['Arteries', 'Veins', 'Capillaries', 'Arterioles'],
    answer: 2
  },
  {
    q: 'What is the primary function of leukocytes?',
    options: ['To transport oxygen', 'To fight infection', 'To assist in blood clotting', 'To transport carbon dioxide'],
    answer: 1
  },
  {
    q: 'Which valve is between the left atrium and left ventricle?',
    options: ['Tricuspid valve', 'Bicuspid (mitral) valve', 'Pulmonary valve', 'Aortic valve'],
    answer: 1
  },
  {
    q: "What does 'systole' refer to?",
    options: ['Relaxation of the heart', 'Contraction of the heart', 'Closing of the valves', 'Heart failure'],
    answer: 1
  },
  {
    q: 'Which blood component is responsible for initiating clotting?',
    options: ['Erythrocytes', 'Leukocytes', 'Platelets', 'Haemoglobin'],
    answer: 2
  },
  {
    q: "What is the name of the 'pacemaker' of the heart?",
    options: ['AV node', 'SA node', 'Bundle of His', 'Purkinje fibres'],
    answer: 1
  },
  {
    q: 'What is the name of fluid that leaks out of capillaries into tissue?',
    options: ['Plasma', 'Interstitial fluid', 'Lymph', 'Serum'],
    answer: 1
  },
  {
    q: 'Which organ acts as a graveyard for old red blood cells?',
    options: ['Thymus', 'Spleen', 'Tonsils', 'Lymph node'],
    answer: 1
  },
  {
    q: 'In which direction does lymph flow?',
    options: ['Away from the heart', 'Towards the heart only', 'In a continuous loop', 'From liver to kidneys'],
    answer: 1
  },
  {
    q: 'What is the function of lymph nodes?',
    options: ['Produce red blood cells', 'Pump lymph', 'Filter lymph and trap pathogens', 'Oxygenate fluid'],
    answer: 2
  },
  {
    q: 'Which is a function of the lymphatic system?',
    options: ['Transport oxygen', 'Return excess tissue fluid to the blood', 'Produce bile', 'Control body temperature'],
    answer: 1
  },
  {
    q: 'The thoracic duct drains lymph from:',
    options: ['The right arm only', 'The majority of the body', 'The lungs only', 'The brain'],
    answer: 1
  },
  {
    q: 'Where do T-cells mature?',
    options: ['Spleen', 'Thymus', 'Bone marrow', 'Thyroid'],
    answer: 1
  },
  {
    q: 'What are the building blocks of proteins?',
    options: ['Monosaccharides', 'Fatty acids', 'Amino acids', 'Nucleotides'],
    answer: 2
  }
];