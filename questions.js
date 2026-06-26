// ─────────────────────────────────────────────────────────────
// QUESTIONS — edit this file to customise your quiz
//
// Each question needs:
//   q      — the question text (string)
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
    q: 'Which of the following doesn\'t contain involuntary muscle',
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
    options: ['Transmits information to and from the body', 'Stimulates the body\'s involuntary organs', 'Slows down the body', 'Transmission of the sensory information only'],
    answer: 0
  },
  {
    q: 'Name a reaction of the nervous system outside the control of the brain',
    options: ['Digestion', 'Respiration', 'Reflexes', 'Heartbeat'],
    answer: 2
  },
  {
    q: 'What would be a symptom of Bell\'s palsy',
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
    options: ['Regulation of salts in the body', 'Maintenance of calcium levels in plasma', 'Regulation of water absorption', 'Prepares the body for \'fight or flight\''],
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
    options: ['Graves\' disease', 'Myxoedema', 'Cretinism', 'Dwarfism'],
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
    q: 'Define Bright\'s Disease:',
    options: ['Inflammation of the eye', 'Inflammation of the kidney', 'Inflammation of the bladder', 'Inflammation of the liver'],
    answer: 1
  },
  {
    q: 'Cystitis is defined as an:',
    options: ['Inflammation of the urethra', 'Inflammation of the kidney', 'Inflammation of the ureter', 'Inflammation of the bladder'],
    answer: 3
  },
  {
    q: 'The causes of Addison\'s Syndrome are:',
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
    q: 'A ligament connects:',
    options: ['Bone to bone', 'Muscle to muscle', 'Muscle to bone', 'Muscle to skin'],
    answer: 0
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
    q: 'Which of the following statements is true? (lung anatomy)',
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
    q: 'The release of noradrenaline causes:',
    options: ['Vasoconstriction', 'Vasodilation', 'Dilation of muscle fibres', 'Accelerates conversion of glycogen to glucose'],
    answer: 0
  },
  {
    q: 'The causes of Cushing\'s Disease include the:',
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
    options: ['Dwarfism', 'Graves\' disease', 'Cretinism', 'Myxoedema'],
    answer: 1
  },
  {
    q: 'The action of the infraspinatus muscle is to:',
    options: ['Rotate the arm inwards', 'Adduct the arm', 'Rotate the arm outwards', 'Abduct the arm'],
    answer: 2
  },
  {
    q: 'Which of the following statements is true? (muscle contraction)',
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
    options: ['Autoimmune reaction', 'Anaphylactic reaction', 'A reflex action', 'Cushing\'s syndrome'],
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
    options: ['Peyer\'s patches', 'Liver', 'Thoracic duct', 'Spleen'],
    answer: 3
  },
  {
    q: 'What disease is characterised by the body not recognising some of its own chemical structures?',
    options: ['Hodgkin\'s disease', 'Lymphoma', 'Cancer', 'Autoimmune disease'],
    answer: 3
  },
  {
    q: 'What antibodies does group A blood plasma carry?',
    options: ['Anti-A antibodies', 'Anti-B antibodies', 'Anti-A and B antibodies', 'Neither'],
    answer: 1
  },
  {
    q: 'Which blood group\'s plasma carries both anti-A and anti-B antibodies?',
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
    options: ['Peyer\'s patches', 'Cisterna chyli', 'Axillary node', 'Inguinal node'],
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
    q: 'What is dermatitis?',
    options: ['An inflammation of the skin caused by external factors', 'An allergy marked by the eruption of wheals with severe itching', 'An erythema covered with silvery scales', 'An infection of the skin'],
    answer: 0
  },
  {
    q: 'Which of these is an example of a bacterial skin disease?',
    options: ['Herpes simplex', 'Acne vulgaris', 'Tinea pedis', 'Eczema'],
    answer: 1
  },
  {
    q: 'What do eccrine glands excrete?',
    options: ['Sebum', 'Milky fluid', 'Watery sweat', 'Oil'],
    answer: 2
  },
  {
    q: 'Malignant melanoma is defined as:',
    options: ['A malignancy found in melanin', 'A malignant mole', 'A malignancy found in ergosterol', 'A malignant tumour of the melanocytes'],
    answer: 3
  },
  {
    q: 'Which muscle adducts the arm and medially rotates the humerus?',
    options: ['Teres major', 'Teres minor', 'Deltoid', 'Supraspinatis'],
    answer: 0
  },
  {
    q: 'Which muscle adducts and rotates the scapula downwards?',
    options: ['Trapezius', 'Latissimus dorsi', 'Rhomboid major', 'Serratus anterior'],
    answer: 1
  },
  {
    q: 'What does a ligament connect?',
    options: ['Bone to bone', 'Muscle to muscle', 'Muscle to bone', 'Muscle to skin'],
    answer: 0
  },
  {
    q: 'The muscles of the lower leg and foot include:',
    options: ['Gracilis', 'Peroneus Longus', 'Supinator Radii Brevis', 'Flexor Carpi Radialis'],
    answer: 1
  },
  {
    q: 'What is the action of the gluteus medius?',
    options: ['To flex the femur', 'To abduct and medially rotate the femur', 'To extend the femur', 'To laterally rotate the femur'],
    answer: 1
  },
  {
    q: 'What occurs at the metaphase stage of mitosis?',
    options: ['Pairs of chromatids divide and identical halves of the pairs move to each end of', 'The spindle fibres disintegrate and the centrioles replicate', 'The chromosomes arrange themselves at the centre of the cell, each', 'The cell is resting'],
    answer: 2
  },
  {
    q: 'What is the function of hyaline cartilage?',
    options: ['To absorb shock', 'To connect and protect', 'To be flexible', 'To transport'],
    answer: 1
  },
  {
    q: 'What are centrioles?',
    options: ['Rod-like organelles that play an important part in mitosis', 'Dense areas in the cytoplasm', 'Organelles that contain digestive enzymes to destroy worn out parts of a cell', 'They are two strands held together by a centromere to form a chromosome'],
    answer: 0
  },
  {
    q: 'What is the function of striated muscle tissue?',
    options: ['To help support and move the body', 'To allow the heart to pump blood', 'To transmit signals', 'To carry out involuntary functions'],
    answer: 0
  },
  {
    q: 'What is the function of columnar epithelial tissue?',
    options: ['To protect the delicate parts of the body', 'To form the lining of the stomach and intestines', 'To form a waterproof and expandable lining', 'To provide lubrication'],
    answer: 1
  },
  {
    q: 'Where would you find the navicular bone?',
    options: ['In the face', 'In the hand', 'In the foot', 'In the cranium'],
    answer: 2
  },
  {
    q: 'Which of the following is an example of a flat bone?',
    options: ['Nasal', 'Patella', 'Clavicle', 'Capitate'],
    answer: 0
  },
  {
    q: 'An example of a fixed joint is:',
    options: ['Between the tarsals', 'Between the phalanges of the thumb and its metacarpal', 'The innominate bones', 'Between the vertebrae'],
    answer: 2
  },
  {
    q: 'What is the cause of rheumatoid arthritis?',
    options: ['An auto immune disease that attacks the synovial membrane', 'A deficiency of calcium', 'A deposition of uric acid crystals within the joint capsule and cartilage', 'An injury to the joint'],
    answer: 0
  },
  {
    q: 'The reduction of which hormone could be the cause of osteoporosis in women?',
    options: ['Human growth', 'Testosterone', 'Progesterone', 'Oestrogen'],
    answer: 3
  },
  {
    q: 'What is the function of the glucocorticoid hormones?',
    options: ['To metabolise carbohydrates, fats and proteins', 'To metabolise vitamins and minerals', 'To regulate glucose levels', 'To regulate salts in the body'],
    answer: 0
  },
  {
    q: 'What can hypersection of thyroxin in adults cause?',
    options: ['Graves disease', 'Myxoedema', 'Cretinism', 'Dwarfism'],
    answer: 0
  },
  {
    q: 'What could hyposecretion of vasopressin in adults cause?',
    options: ['Low blood pressure', 'Diabetes mellitis', 'Jaundice', 'Diabetes insipidus'],
    answer: 3
  },
  {
    q: 'What does a person suffering from diabetes insipidus suffer from?',
    options: ['Excessive excretion of urine causing dehydration and extreme thirst', 'Deficiency or absence of insulin causing defective glucose metabolism', 'Failure of the kidneys to regulate sodium, potassium and water excretion causing', 'Over production of insulin causing disturbed neural function leading to coma'],
    answer: 0
  },
  {
    q: 'The inner membrane of the heart wall is called the:',
    options: ['Sino-atrial', 'Myocardium', 'Endocardium', 'Pericardium'],
    answer: 2
  },
  {
    q: 'By which method does oxygen enter the blood stream?',
    options: ['Absorption', 'Diffusion', 'Osmosis', 'Filtration'],
    answer: 1
  },
  {
    q: 'What is atherosclerosis?',
    options: ['Loss of elasticity from the arterial walls causing an increase in blood pressure', 'Blood poisoning', 'Low blood pressure', 'A build up of fats, including cholesterol, inside the arteries'],
    answer: 3
  },
  {
    q: 'What is the function of venules?',
    options: ['To carry deoxygenated blood from the capillaries to the larger veins', 'To carry deoxygenated blood from the larger veins to the capillaries', 'To carry oxygenated blood from the capillaries to the larger veins', 'To carry oxygenated blood from the larger veins to the capillaries'],
    answer: 0
  },
  {
    q: 'What are the characteristics of arteries?',
    options: ['They have thick walls and small lumen', 'They have thin walls and small lumen', 'They have thin walls and thin lumen', 'They have thin walls and large lumen'],
    answer: 0
  },
  {
    q: 'What type of tissue is the middle layer of lymphatic vessels made from?',
    options: ['Areolar', 'Muscular and elastic', 'Endothelial', 'White fibrous'],
    answer: 1
  },
  {
    q: 'Where are the anterior auricular lymph nodes situated?',
    options: ['In front of the ear', 'Behind the ear', 'Under the jaw bone', 'On the neck'],
    answer: 0
  },
  {
    q: 'What areas do the submandibular lymph nodes drain?',
    options: ['Temple and ear', 'Lower lip and chin', 'Nose, eyelids and skin of the face', 'Lips, cheek and nose'],
    answer: 1
  },
  {
    q: 'Which of the following is not a function of the right lymphatic duct?',
    options: ['To drain lymph from the right leg', 'To drain lymph from the right side of the chest', 'To drain lymph from the right arm', 'To drain lymph from the right side of the head'],
    answer: 0
  },
  {
    q: 'The functions of the spleen include to:',
    options: ['Collect and drain lymph', 'Transport excess waste away from the tissues', 'Destroy lymphocytes', 'Destroy thrombocytes'],
    answer: 3
  },
  {
    q: 'How does a nerve impulse travel?',
    options: ['From dendrite to cell body to axon', 'From axon to dendrite to synapse', 'From cerebrum to cerebellum', 'From cell body to synapse to axon'],
    answer: 0
  },
  {
    q: 'What is neuralgia?',
    options: ['Paralysis or weakness of one side of the face caused by injury or infection', 'Disease of the basal ganglia of the brain', 'Shooting pains along the course of a nerve or nerves', 'Pain down the back and outside of the thigh, leg and foot'],
    answer: 2
  },
  {
    q: 'What is the function of the hypoglossal cranial nerve?',
    options: ['To supply the muscles which move the eyes', 'To give a sense of smell', 'To give a sense of sight', 'To supply the muscles of the tongue enabling it to move'],
    answer: 3
  },
  {
    q: 'The function of the myelin sheath includes to:',
    options: ['Help reproduce nerve cells', 'Transmit nerve impulses away from the cell body', 'Speed up nerve conduction', 'Slow down nerve conduction'],
    answer: 2
  },
  {
    q: 'What is the cause of Parkinson’s disease?',
    options: ['Damage to the basal ganglia of the brain', 'Deterioration of the motor neurones in the body', 'Loss of the protective myelin sheath from nerve fibres', 'Paralysis of the face caused by injury or infection of the facial nerve'],
    answer: 0
  },
  {
    q: 'In the secretory phase of the menstrual cycle, which hormone stimulates the ruptured',
    options: ['Progesterone', 'Testosterone', 'Follicle stimulating', 'Luteinising'],
    answer: 3
  },
  {
    q: 'What part of the breast develops and produces milk?',
    options: ['The nipples', 'The ducts', 'The lobules', 'The endocrine gland in the fatty tissue'],
    answer: 2
  },
  {
    q: 'What are carbohydrates?',
    options: ['Essential fatty acids', 'Energy providers', 'Building material for the body', 'Essential organic substances'],
    answer: 1
  },
  {
    q: 'Where does the majority of absorption take place?',
    options: ['In the stomach', 'In the mouth', 'In the small intestine', 'In the large intestine'],
    answer: 2
  },
  {
    q: 'Which of the following is a function of the gall bladder?',
    options: ['To produce vitamin D', 'To regulate blood sugar level', 'To act as a reservoir for bile', 'To complete chemical digestion of food'],
    answer: 2
  },
  {
    q: 'What are the functions of the trachea?',
    options: ['To moisten and warm the air', 'To collect foreign matter or bacteria in the goblet secretory cells', 'To allow exchange of gases to take place', 'To act as a passageway between the larynx and pharynx'],
    answer: 1
  },
  {
    q: 'What is meant by diffusion?',
    options: ['The movement of water and soluble substances across a membrane caused by', 'When water passes through a membrane from a strong concentration of pressure', 'When substances are too large to pass directly through the membrane, a carrier', 'When a strong concentration of gas moves to the weaker concentration of'],
    answer: 3
  },
  {
    q: 'What is the function of the larynx?',
    options: ['To act as the passageway for air between the pharynx and bronchi', 'To act as the passageway for air between the trachea and bronchi', 'To act as the passageway for air between the pharynx and trachea', 'To act as the passageway for air between the nose and trachea'],
    answer: 2
  },
  {
    q: 'Why does the circulatory system rely on the urinary system?',
    options: ['Because the kidneys helps to regulate blood pressure by producing the enzyme', 'Because the kidneys remove waste by excretion', 'Because the kidneys purify the blood', 'Because the kidneys help to stimulate the production of bone marrow'],
    answer: 2
  },
  {
    q: 'What is the function of the renal pelvis of the kidney?',
    options: ['To take urine from the bladder to the outside', 'To collect urine from the medulla and pass it into the ureter', 'To act as a reservoir', 'To take urine from the kidneys to the bladder'],
    answer: 1
  },
  {
    q: 'Which of the following is a characteristic of acne rosacea?',
    options: ['Erythema', 'Comedones', 'Silvery scales', 'Blisters'],
    answer: 0
  },
  {
    q: 'What type of skin disease/disorder is folliculitis?',
    options: ['Congenital', 'Bacterial', 'Viral', 'Fungal'],
    answer: 1
  },
  {
    q: 'Which of the following is a characteristic of albinism?',
    options: ['Complete lack of melanocytes', 'A large area of dilated capillaries', 'Dark patches of pigment', 'Excessive itching'],
    answer: 0
  },
  {
    q: 'What type of skin disorder/disease is tinea pedis?',
    options: ['Bacterial', 'Viral', 'Fungal', 'Congenital'],
    answer: 2
  },
  {
    q: 'Which of the following is a definition of supination?',
    options: ['To point the toes down towards the ground', 'To turn the palm of the hand up to face the ceiling (if lying flat on the floor)', 'Movement in which the distal end of a bone moves in a circle', 'Movement of a bone towards the midline of the body or limb'],
    answer: 1
  },
  {
    q: 'Which of the following muscles is the main one to raise the body to a standing position',
    options: ['Gluteus maximus', 'Gluteus medius', 'Gluteus minimus', 'Piriformis'],
    answer: 0
  },
  {
    q: 'What is the action of the subscapularis?',
    options: ['To rotate the arm inwards', 'To abduct the arm', 'To rotate the arm outwards', 'To adduct the arm'],
    answer: 0
  },
  {
    q: 'Which of the following does NOT help in the chewing of food?',
    options: ['Masseter', 'Temporalis', 'Buccinator', 'Mentalis'],
    answer: 3
  },
  {
    q: 'What is the function of adipose tissue?',
    options: ['To help support and move the body', 'To protect and insulate the body', 'To connect and support other tissues', 'To enable stretch and recoil'],
    answer: 1
  },
  {
    q: 'What is the function of yellow elastic tissue?',
    options: ['To connect and support', 'To protect and insulate', 'To enable stretch and recoil', 'To cover and line'],
    answer: 2
  },
  {
    q: 'Which of the following is the only moveable bone in the skull?',
    options: ['Maxilla', 'Parietal', 'Temporal', 'Mandible'],
    answer: 3
  },
  {
    q: 'What is the name of the bone that forms the kneecap?',
    options: ['The femur', 'The clavicle', 'The sternum', 'The patella'],
    answer: 3
  },
  {
    q: 'What is the name of the first cervical vertebra?',
    options: ['Skull', 'Occipital', 'Atlas', 'Axis'],
    answer: 2
  },
  {
    q: 'What is osteoporosis?',
    options: ['Degeneration of one or more joints', 'Inflammation of many joints', 'A disease where the bones become porous and brittle', 'Inflammation of the synovial fluid in a joint'],
    answer: 2
  },
  {
    q: 'How many pairs of ribs are there?',
    options: ['8', '10', '12', '14'],
    answer: 2
  },
  {
    q: 'Hypersecretion of testosterone in females can lead to:',
    options: ['Endometriosis', 'Amenhorrhoea', 'Dysmenorrhoea', 'Premenstrual syndrome'],
    answer: 1
  },
  {
    q: 'A person with a high blood sugar level and high urine production could be suffering from',
    options: ['Addison’s disease', 'Diabetes mellitis', 'Diabetes insipidus', 'Muscular atrophy'],
    answer: 1
  },
  {
    q: 'What is amenorrhoea?',
    options: ['Painful menstruation', 'Very heavy menstruation', 'Constant menstruation', 'Absence of menstruation'],
    answer: 3
  },
  {
    q: 'Which part of the nervous system controls the endocrine system?',
    options: ['The cerebellum gland', 'The hypothalamus', 'The medulla oblongata', 'The cerebrum'],
    answer: 1
  },
  {
    q: 'Which of the following blood vessels leaves the heart carrying oxygen?',
    options: ['The superior vena cava', 'The aorta', 'The pulmonary vein', 'The pulmonary artery'],
    answer: 1
  },
  {
    q: 'What type of blood does the right side of the heart carry?',
    options: ['Arterial', 'Oxygenated', 'Deoxygenated', 'Venule'],
    answer: 2
  },
  {
    q: 'Which artery supplies the head and neck?',
    options: ['Jugular', 'Common carotid', 'Mesenteric', 'Subclavian'],
    answer: 1
  },
  {
    q: 'Which of the following is not a function of the Lymphatic System?',
    options: ['To produce new lymphocytes', 'To filter harmful materials from the blood', 'To assist in the absorption of fats', 'To produce antibodies'],
    answer: 1
  },
  {
    q: 'Where would you find the tonsils?',
    options: ['Just above the stomach', 'By the pharynx', 'By the trachea', 'In the small intestines'],
    answer: 1
  },
  {
    q: 'Which of the following is a function of a lymphatic node?',
    options: ['To produce subcutaneous tissue', 'To remove and destroy harmful micro-organisms', 'To produce endothelial and elastic tissue', 'To produce blood plasma'],
    answer: 1
  },
  {
    q: 'What is the name of the lymph node that is found in the crook of the elbow?',
    options: ['The supratrochlear', 'The axillary', 'The popliteal', 'The inguinal'],
    answer: 0
  },
  {
    q: 'Which of the following is a function of the thoracic duct?',
    options: ['To drain lymph from the right axillary node', 'To drain lymph from the right supratrochlear lymph node', 'To drain lymph from the right submandibular node', 'To drain lymph from the right popliteal node'],
    answer: 3
  },
  {
    q: 'How many pairs of spinal nerves are there?',
    options: ['27', '30', '31', '33'],
    answer: 2
  },
  {
    q: 'What is the effect of neuritis?',
    options: ['Tremors and rigidity in muscles', 'Lack of control over the motor system of the body', 'Muscular weakness loss of muscular coordination, problems with skin sensation,', 'Pain along the length of the nerve'],
    answer: 3
  },
  {
    q: 'What is the function of the hypoglossal nerve?',
    options: ['To supply the muscles which move the eyes', 'To give a sense of smell', 'To give a sense of sight', 'To supply the muscles of the tongue, enabling it to move'],
    answer: 3
  },
  {
    q: 'Which part of the brain is responsible for interpreting sensation?',
    options: ['Cerebrum', 'Cerebellum', 'Pons varolii', 'Medulla oblongata'],
    answer: 0
  },
  {
    q: 'A person suffering from anorexia nervosa is someone who:',
    options: ['Binges and takes diuretics', 'Only eats two meals a day', 'Has a fear of gaining weight therefore will not eat', 'Regularly eats more food that is necessary'],
    answer: 2
  },
  {
    q: 'What is the muscle called that allows food to enter the stomach?',
    options: ['Pyloric sphinter', 'Cardiac sphinter', 'Anal sphinter', 'Mouth of the stomach'],
    answer: 1
  },
  {
    q: 'What is the action of pepsin?',
    options: ['To curdle milk', 'To break down proteins into peptones', 'To breakdown polypeptides into amino acids', 'To breakdown polysaccharides into disaccharides'],
    answer: 1
  },
  {
    q: 'Which of the following statements is true with regard to inspiration?',
    options: ['The diaphragm relaxes, becomes a dome shape and pushes up the chest cavity', 'The diaphragm contracts, becomes a dome shape and pushes up the chest', 'The diaphragm relaxes and flattens out forming the bottom of the chest cavity', 'The diaphragm contracts and flattens out forming the bottom of the chest cavity.'],
    answer: 3
  },
  {
    q: 'Which of the following is a function of the trachea?',
    options: ['To moisten and warm the air', 'To collect foreign matter or bacteria in the lining of the cells', 'To allow exchange of gases to take place', 'To act as a passageway between the larynx and pharynx'],
    answer: 1
  },
  {
    q: 'What is the function of the pleural cavity?',
    options: ['To prevent friction between the two layers', 'To filter and warm the air', 'To exchange gases between the respiratory and the circulatory systems', 'To transport air into and out of the lungs'],
    answer: 0
  },
  {
    q: 'Which disease / disorder results in calcium deposits forming in the renal pelvis?',
    options: ['Glomerulonephritis', 'Gallbladder stones', 'Nephritis', 'Kidney stones'],
    answer: 3
  },
  {
    q: 'What is herpes zoster also known as?',
    options: ['Cold sore', 'Shingles', 'Hives', 'Liver spots'],
    answer: 1
  },
  {
    q: 'Which of the following statements is incorrect with regards the function of the skin?',
    options: ['Absorption is a function of the skin', 'Elimination is a function of the skin', 'Sensation is a function of the skin', 'Support is a function of the skin'],
    answer: 3
  },
  {
    q: 'Which of the following is an example of a bacterial skin disease?',
    options: ['Tinea corporis', 'Folliculitis', 'Warts', 'Dermatitis'],
    answer: 1
  },
  {
    q: 'How many layers does the epidermis contain?',
    options: ['Four', 'Two', 'Three', 'Five'],
    answer: 3
  },
  {
    q: 'Which of the following is a definition of extension?',
    options: ['To straighten or bend back', 'To point the toe towards the sky', 'Movement of a bone or the trunk around its own longitudinal axis', 'Movement of a bone towards the midline of the body or limb'],
    answer: 0
  },
  {
    q: 'What is the action of the biceps femoris?',
    options: ['To extend the hip and flex the knee', 'To flex the hip and abduct the leg', 'To flex the arm', 'To flex the hip and extend the knee'],
    answer: 0
  },
  {
    q: 'What is the action of the orbicularis oculi?',
    options: ['To close the mouth', 'To raise and retract the lower jaw', 'To purse the lips', 'To close the eye'],
    answer: 3
  },
  {
    q: 'Which of the following is a definition of adduction?',
    options: ['Movement of a bone away from the midline of the body or limb', 'To bend in order to decrease the angle between bones at a joint', 'Movement of a bone towards the midline of the body or limb', 'To straighten or bend back'],
    answer: 2
  },
  {
    q: 'Which muscle draws the arm forward, adducts and rotates the arm medially?',
    options: ['Pectoralis major', 'Serratus anterior', 'Teres minor', 'Deltoid'],
    answer: 0
  },
  {
    q: 'What is the study of the structure of tissues called?',
    options: ['Ostelogy', 'Histology', 'Neurology', 'Angiology'],
    answer: 1
  },
  {
    q: 'Which of the following statements is incorrect with regards to yellow elastic tissue?',
    options: ['The spleen contains yellow elastic tissue', 'The stomach contains yellow elastic tissue', 'The bladder contains yellow elastic tissue', 'The aorta contains yellow elastic tissue'],
    answer: 0
  },
  {
    q: 'Which of the following tissues transmits signals?',
    options: ['Muscle', 'Blood', 'Areolar', 'Nervous'],
    answer: 3
  },
  {
    q: 'Cancellous tissue is found in bones and is used for:',
    options: ['Strength', 'Flexibility', 'Protective and insulator purposes', 'Structure bearing and cell development'],
    answer: 3
  },
  {
    q: 'What type of joint do the atlas and axis form?',
    options: ['Pivot', 'Hinge', 'Gliding', 'Saddle'],
    answer: 0
  },
  {
    q: 'How many tarsal bones are there in each foot?',
    options: ['6', '7', '8', '9'],
    answer: 1
  },
  {
    q: 'Where would you find an example of a fixed joint?',
    options: ['Between the tarsals', 'Between the phalanges of the thumb and its metacarpals', 'The innominate bones', 'Between the vertebrae'],
    answer: 2
  },
  {
    q: 'Which area of the spine does lordosis affect?',
    options: ['The sacrum', 'The thoracic', 'The cervical', 'The lumbar'],
    answer: 3
  },
  {
    q: 'Which of the following is the only movable bone in the skull?',
    options: ['Maxilla', 'Parietal', 'Temporal', 'Mandible'],
    answer: 3
  },
  {
    q: 'Which endocrine gland is known as the ‘master gland’?',
    options: ['Pineal', 'Pituitary', 'Adrenal', 'Thymus'],
    answer: 1
  },
  {
    q: 'Which of the following is an effect of polycystic ovarian syndrome?',
    options: ['Hirsutism', 'Release of adrenaline into the bloodstream', 'Muscular atrophy', 'Early menopause'],
    answer: 0
  },
  {
    q: 'Which hormone controls the adrenal cortex?',
    options: ['HGH', 'MSH', 'TSH', 'ACTH'],
    answer: 3
  },
  {
    q: 'What do the endocrine glands secrete?',
    options: ['Melanin', 'Sebum', 'Blood cells', 'Hormones'],
    answer: 3
  },
  {
    q: 'What chamber of the heart receives deoxygenated blood first?',
    options: ['The right atrium', 'The right ventricle', 'The left atrium', 'The left ventricle'],
    answer: 0
  },
  {
    q: 'What is the cause of Hepatitis A?',
    options: ['Excessive intake of fats', 'Infected body fluids', 'Faecally contaminated foods', 'Cancer of the blood'],
    answer: 2
  },
  {
    q: 'What is hypertension?',
    options: ['Low blood pressure', 'Low cholesterol', 'High blood pressure', 'High cholesterol'],
    answer: 2
  },
  {
    q: 'Which of the following statements is incorrect with regard to lymph flow?',
    options: ['Warmth promotes lymph flow', 'Cold promotes lymph flow', 'Exertion promotes lymph flow', 'Contraction of skeletal muscle promotes lymph flow'],
    answer: 1
  },
  {
    q: 'What is the name of the lymph node found in the armpit?',
    options: ['The supratrochlear', 'The cervical', 'The axillary', 'The inguinal'],
    answer: 2
  },
  {
    q: 'How is lymph drained into the circulatory system?',
    options: ['Through the spleen', 'Through the lymphatic capillaries', 'Through the lymphatic nodes', 'Through the lymphatic ducts'],
    answer: 3
  },
  {
    q: 'Which part of the brain is responsible for breathing?',
    options: ['Pons varolii', 'Cerebellum', 'Medulla oblongata', 'Cerebrum'],
    answer: 2
  },
  {
    q: 'How many pairs of coccygeal nerves are there?',
    options: ['1', '3', '5', '6'],
    answer: 0
  },
  {
    q: 'What is the function of a sensory nerve?',
    options: ['To carry impulses from all parts of the body to the brain', 'To carry impulses from the brain to the muscles', 'To protect the brain from external stimuli', 'To protect the spinal cord from external stimuli'],
    answer: 0
  },
  {
    q: 'What is the function of hypothalamus?',
    options: ['To help control the rate and force of the heart', 'To help control the rate and depth of breathing', 'To help control the constriction and dilation of blood vessels', 'To help with the regulation of body temperature'],
    answer: 3
  },
  {
    q: 'Which of the following statements is incorrect with regard the liver?',
    options: ['Vitamin K is stored in the liver', 'Vitamin B6 is stored in the liver', 'Vitamin B12 is stored in the liver', 'Vitamin A is stored in the liver'],
    answer: 1
  },
  {
    q: 'What is the action of lactase?',
    options: ['To break down specific proteins into peptones', 'To break specific disaccharides to monosaccharides', 'To break down specific fats to fatty acids', 'To break down specific starch to polysaccharides'],
    answer: 1
  },
  {
    q: 'Which of the following statements is incorrect with regard respiration?',
    options: ['The transverse abdominus is a muscle involved with respiration', 'The intercostals are muscles involved with respiration', 'The internal obliques are muscles involved with respiration', 'The diaphragm is a muscle involved with respiration'],
    answer: 0
  },
  {
    q: 'What do you call the exchange of gases between the lungs and the blood',
    options: ['External inspiration', 'Internal respiration', 'Expiration', 'Respiration'],
    answer: 0
  },
  {
    q: 'The functions of the ureter include:',
    options: ['To take urine from the tubules in the medulla and pass into the bladder', 'To take urine from the kidneys to the bladder', 'To take urine from the bladder to the outside', 'To take urine from the urethra to the bladder'],
    answer: 1
  },
  {
    q: 'What is meant by micturition?',
    options: ['The act of passing urine', 'The act of passing faeces', 'The act of filtration within the glomerular capsule', 'The act of re-absorption of proteins, amino acids and sugars in nephrons of the'],
    answer: 0
  },
  {
    q: 'The dermis has the ability to absorb:',
    options: ['Mineral oils', 'Chemical substances', 'Water', 'Aqueous creams'],
    answer: 1
  },
  {
    q: 'The role of the subaceous gland is to:',
    options: ['Control temperature', 'Secrete chemicals and act as nerve receptors', 'Remove waste from the skin', 'Secrete sebum to act as a natural moisturiser'],
    answer: 3
  },
  {
    q: 'A verruca is:',
    options: ['Bacterial', 'Fungal', 'Viral', 'Congenital'],
    answer: 2
  },
  {
    q: 'The action of the gluteus medius muscle is to:',
    options: ['Extend the femur', 'Adduct and laterally rotate the femur', 'Flex the hip, flex the knee', 'Abduct and medially rotate the femur'],
    answer: 3
  },
  {
    q: 'The functions of areolar tissue include:',
    options: ['Protection, insulation', 'Support, connection', 'Stretch, recoil', 'Lining, absorption'],
    answer: 1
  },
  {
    q: 'What happens at the telophase stage of mitosis?',
    options: ['Pairs of chromatids divide and identical halves of the pairs move to each end of', 'The spindle fibres disintegrate and the centrioles replicate', 'The chromosomes arrange themselves at the centre of the cell, each attached to', 'The centrosome divide into two'],
    answer: 1
  },
  {
    q: 'The functions of the skeletal system include to:',
    options: ['Receive messages, protect', 'Store calcium, form red blood cells', 'Form vitamin D, maintain homeostatis', 'Stimulate and reproduce muscles'],
    answer: 1
  },
  {
    q: 'The common name for the zygomatic bone is:',
    options: ['Jaw bone', 'Cheek bone', 'Forehead', 'Skull bone'],
    answer: 1
  },
  {
    q: 'Hormones are transported in the:',
    options: ['Circulatory system', 'Lymphatic system', 'Digestive system', 'Respiratory system'],
    answer: 0
  },
  {
    q: 'Hypersecretion of thyroxin can cause:',
    options: ['Graves disease', 'Myxoedema', 'Cretinism', 'Dwarfism'],
    answer: 0
  },
  {
    q: 'Which vessel carries oxygen into the heart?',
    options: ['Inferior vena cava', 'Pulmonary vein', 'Superior vena cava', 'Pulmonary artery'],
    answer: 1
  },
  {
    q: 'The functions of the large intestine include:',
    options: ['Ingestion', 'Indigestion', 'Digestion', 'Excretion'],
    answer: 3
  },
  {
    q: 'What is nephritis?',
    options: ['An inflammation of the eyes', 'An inflammation of the kidneys', 'An inflammation of the bladder', 'An inflammation of the liver'],
    answer: 1
  },
  {
    q: 'What is the structure of a tendon',
    options: ['White fibrous elastic tissue', 'White fibrous connective tissue', 'White fibrous elastic cords', 'White fibrous cords with no elasticity'],
    answer: 1
  },
  {
    q: 'Where is the risorius positioned',
    options: ['Around the eye', 'Between the masseter and corner of the mouth', 'Behind the cheek bone', 'Upper eyelid'],
    answer: 1
  },
  {
    q: 'Where is the rectus abdominus positioned',
    options: ['Side of thorax', 'Deep to the transverse abdominus', 'Waist', 'Abdominal wall'],
    answer: 3
  },
  {
    q: 'Which muscle flexes the wrist joint',
    options: ['Flexor carpi digitorum', 'Flexor digitorum superficialis', 'Anconeus', 'Flexor carpi radialis'],
    answer: 3
  },
  {
    q: 'What muscle extends the hip',
    options: ['Adductor magnus', 'Vastus intermedius', 'Soleus', 'Biceps femoris'],
    answer: 3
  },
  {
    q: 'What is the composition of muscle',
    options: ['75% water, 20% proteins, 5% fats, mineral salts and glycogen', '75% water, 15% proteins, 10% fats, mineral salts and glucose', '75% water, 20% proteins, 5% fats, mineral salts and glucose', '75% water and 25% proteins'],
    answer: 0
  },
  {
    q: 'Where is superficial fascia found',
    options: ['Surrounding the muscle', 'Top layer of the skin', 'Beneath the skin', 'Surrounding the tendon'],
    answer: 2
  },
  {
    q: 'What is the action of the trapezius',
    options: ['Flexes head', 'Draws arm forward', 'Draws scapula backwards', 'Bend neck laterally'],
    answer: 2
  },
  {
    q: 'What is the position of the biceps',
    options: ['Back of the upper arm', 'Elbow', 'Posterior forearm', 'Front of the upper arm'],
    answer: 3
  },
  {
    q: 'Which muscle is positioned on the lateral front of the lower leg',
    options: ['Soleus', 'Gastrocnemius', 'Flexor digitorum longus', 'Tibialis anterior'],
    answer: 3
  },
  {
    q: 'What causes spasticity',
    options: ['A build up of lactic acid on the muscle', 'Inhibitory nerves in a muscle have been cut', 'Over exertion of a muscle', 'Under nourishment of a muscle'],
    answer: 1
  },
  {
    q: 'Which one of the following muscles is not part of the quadriceps',
    options: ['Vastus lateralis', 'Rectus femoris', 'Biceps femoris', 'Vastus medialis'],
    answer: 2
  },
  {
    q: 'Where is the coracobrachialis positioned',
    options: ['Lower arm', 'Elbow', 'Top of humerus', 'Anterior forearm'],
    answer: 2
  },
  {
    q: 'What is the deepest muscle of the abdomen',
    options: ['Transverse abdominis', 'Rectus abdominis', 'Internal oblique', 'External oblique'],
    answer: 0
  },
  {
    q: 'Which muscle raises the mandible',
    options: ['Sternocleidomastoid', 'Medial pterygoid', 'Lateral pterygoid', 'Temporalis'],
    answer: 3
  },
  {
    q: 'The origin of a muscle is known as',
    options: ['The main body of the muscle', 'The attachment of the muscle to tendons', 'The fixed end of the muscle', 'The moving end of the muscle'],
    answer: 2
  },
  {
    q: 'Which muscle covers the frontal and parietal bones',
    options: ['Mentalis', 'Occipitalis', 'Nasalis', 'Frontalis'],
    answer: 3
  },
  {
    q: 'Where is the brachialis positioned',
    options: ['Posterior aspect of upper arm', 'Anterior aspect of upper arm', 'Posterior of forearm', 'Anterior of forearm'],
    answer: 1
  },
  {
    q: 'How does the muscular system rely on the respiratory system',
    options: ['Muscles receive oxygen from the respiratory system', 'Muscles receive glucose from the respiratory system', 'Muscles receive nerve impulses from the respiratory system', 'Muscles receive glycogen from the respiratory system'],
    answer: 0
  },
  {
    q: 'Which muscle extends the wrist joint',
    options: ['Extensor carpi digitorum', 'Pronator teres', 'Extensor carpi ulnaris', 'Anconeus'],
    answer: 2
  },
  {
    q: 'Which muscle is positioned on the inner thigh',
    options: ['Biceps femoris', 'Vastus lateralis', 'Gracilis', 'Soleus'],
    answer: 2
  },
  {
    q: 'Which one of the following is not a function of muscle',
    options: ['Produce movement', 'Maintain posture', 'Temperature control', 'Protects organs'],
    answer: 3
  },
  {
    q: 'Lactic acid is caused by',
    options: ['Inadequate blood supply in the muscle', 'Temperature of the muscle', 'Lack of oxygen in the muscle', 'Over stimulus of the nerve impulse'],
    answer: 2
  },
  {
    q: 'Pronation describes',
    options: ['Flexion of the foot downwards', 'Turning a limb to face downwards', 'Moving a limb towards the midline', 'Turning a limb towards the centre'],
    answer: 1
  },
  {
    q: 'Which muscle pulls the lower lip straight down',
    options: ['Depressor labii inferioris', 'Depressor anguli oris', 'Orbicularis oculi', 'Buccinator'],
    answer: 0
  },
  {
    q: 'Which muscle draws the shoulder forward',
    options: ['Serratus anterior', 'Middle deltoid', 'Internal oblique', 'Posterior deltoid'],
    answer: 0
  },
  {
    q: 'What is the position of the pronator teres',
    options: ['Anterior forearm', 'Posterior forearm', 'Anterior elbow', 'Wrist'],
    answer: 0
  },
  {
    q: 'What is the action of the vastus medialis',
    options: ['Flexes knee', 'Extends knee', 'Flexes hip', 'Extends hip'],
    answer: 1
  },
  {
    q: 'Which of the following is an involuntary action',
    options: ['Lifting an arm', 'Heartbeat', 'Rotation of the head', 'Moving fingers'],
    answer: 1
  },
  {
    q: 'Inflammation of a muscle is known as',
    options: ['Myositis', 'Fibrositis', 'Spasticity', 'Rupture'],
    answer: 0
  },
  {
    q: 'Which muscle flexes the elbow joint',
    options: ['Brachioradialis', 'Pronator teres', 'Anconeus', 'Extensor carpi radialis'],
    answer: 0
  },
  {
    q: 'What is the structure of voluntary muscle',
    options: ['Bundles of unmyelinated sheath', 'Spindle shaped cells with no nucleus', 'Cylindrical cells which make up fibres which have several nuclei and are surrounded by a sheath', 'Striated fibres with a membrane and nucleus'],
    answer: 2
  },
  {
    q: 'Which one of the following is not a function of superficial fascia',
    options: ['Helps retain body warmth', 'Connects skin with deep fascia', 'Facilitates the movement of the skin', 'Connects muscles with deep fascia'],
    answer: 3
  },
  {
    q: 'Which muscle aids mastication',
    options: ['Buccinator', 'Masseter', 'Orbicularis oculi', 'Depressor anguli oris'],
    answer: 1
  },
  {
    q: 'Which muscle extends the hip',
    options: ['Ilio psoas', 'Gluteus minimus', 'Gluteus medius', 'Gluteus maximus'],
    answer: 3
  },
  {
    q: 'What is the position of the brachioradialis',
    options: ['Anterior forearm', 'Anterior elbow', 'Medial anterior forearm', 'Lateral anterior forearm'],
    answer: 3
  },
  {
    q: 'What is the action of the rectus femoris',
    options: ['Flex knee', 'Extend hip', 'Extend knee', 'Extends foot'],
    answer: 2
  },
  {
    q: 'Which muscle supports the arches of the feet',
    options: ['Sartorius', 'Peroneus longus', 'Tibialis anterior', 'Soleus'],
    answer: 1
  },
  {
    q: 'What muscle flexes the knee',
    options: ['Semitendinosus', 'Vastus Lateralis', 'Peroneus longus', 'Tibialis anterior'],
    answer: 0
  },
  {
    q: 'Which one of the following is not a cause of a strain',
    options: ['Over use', 'Over exertion', 'Over stretching', 'Over heating'],
    answer: 3
  },
  {
    q: 'What is the largest muscle in the body',
    options: ['Gluteus maximus', 'Latissimus dorsi', 'Trapezius', 'Rhomboids'],
    answer: 0
  },
  {
    q: 'Isometric contraction involves',
    options: ['Muscle contraction with no movement', 'Muscle stretching', 'Muscle contraction with movement', 'Muscle contraction with movement and no tension'],
    answer: 0
  },
  {
    q: 'What is a muscle\'s main fuel',
    options: ['Lactic acid', 'Glucose', 'Oxygen', 'Blood'],
    answer: 1
  },
  {
    q: 'Which muscle moves the scalp backwards',
    options: ['Frontalis', 'Buccinator', 'Occipitalis', 'Levator labii superioris'],
    answer: 2
  },
  {
    q: 'Which muscle is positioned underneath the masseter',
    options: ['Mandible', 'Maxilla', 'Risorius', 'Buccinator'],
    answer: 3
  },
  {
    q: 'Where is the transverse abdominis positioned',
    options: ['Waist', 'Deep to the internal and external obliques', 'Side of thorax', 'Pelvic floor'],
    answer: 1
  },
  {
    q: 'What is the action of the peroneus longus',
    options: ['Everts foot', 'Plantarflexes foot', 'Everts and plantarflexes foot', 'Extends toes'],
    answer: 2
  },
  {
    q: 'Which muscle is not part of the hamstring group',
    options: ['Vastus lateralis', 'Semitendinosus', 'Biceps femoris', 'Semimembranosus'],
    answer: 0
  },
  {
    q: 'Atrophy can be described as',
    options: ['Inflammation of a muscle', 'A build up of lactic acid on a muscle', 'Under nourishment of a muscle', 'Injury to a joint'],
    answer: 2
  },
  {
    q: 'Smooth muscle is also known as',
    options: ['Skeletal muscle', 'Involuntary muscle', 'Voluntary muscle', 'Cardiac muscle'],
    answer: 1
  },
  {
    q: 'When a muscle contracts and moves it is known as',
    options: ['Isometric contraction', 'Antagonist', 'Isotonic contraction', 'Muscle attachment'],
    answer: 2
  },
  {
    q: 'Which one of the following is not an action of the teres major',
    options: ['Rotates scapula', 'Adducts humerus', 'Medially rotates humerus', 'Extends shoulder joint'],
    answer: 0
  },
  {
    q: 'Which muscle adducts the humerus',
    options: ['Infraspinatus', 'Pronator teres', 'Brachioradialis', 'Teres major'],
    answer: 3
  },
  {
    q: 'What is the action of the brachialis',
    options: ['Extend elbow joint', 'Extends wrist', 'Flexes elbow joint', 'Flexes wrist'],
    answer: 2
  },
  {
    q: 'Which muscle is positioned on the front of the thigh',
    options: ['Gracilis', 'Rectus femoris', 'Biceps femoris', 'Adductor magnus'],
    answer: 1
  },
  {
    q: 'What is the action of the gastrocnemius',
    options: ['Flexes toes', 'Flexes foot', 'Extends foot', 'Plantarflexes ankle'],
    answer: 3
  },
  {
    q: 'Which of the following is not a cause of a cramp',
    options: ['Vigorous exercise', 'Extreme heat', 'Dehydration', 'Potassium depletion'],
    answer: 0
  },
  {
    q: 'Which one of the following muscle is not part of the adductor group',
    options: ['Adductor brevis', 'Adductor medialis', 'Adductor Longus', 'Adductor magnus'],
    answer: 1
  },
  {
    q: 'Which muscle flexes the elbow',
    options: ['Triceps', 'Biceps', 'Flexor carpi ulnaris', 'Flexor carpi radialis'],
    answer: 1
  },
  {
    q: 'Which muscle rotates the femur laterally',
    options: ['Adductor magnus', 'Vastus lateralis', 'Peroneus longus', 'Ilio psoas'],
    answer: 3
  },
  {
    q: 'What is the structure of involuntary muscle',
    options: ['Spindle shaped cells with no membrane and one nucleus', 'Striated fibres with a membrane and no nucleus', 'Cylindrical cells with several nuclei', 'Spindle shaped cells with a membrane and no nucleus'],
    answer: 0
  },
  {
    q: 'What is the function of a tendon',
    options: ['It connects muscle to bone', 'It connects bone to ligaments', 'It connects the origin of a muscle to its insertion point', 'It connects muscle to ligaments'],
    answer: 0
  },
  {
    q: 'What is the action of the masseter',
    options: ['Opens upper eyelid', 'Lifts upper lip', 'Raises lower jaw', 'Closes eyelid'],
    answer: 2
  },
  {
    q: 'Which muscle allows the neck to rotate from side to side',
    options: ['Levator scapulae', 'Sternocleidomastoid', 'Trapezius', 'Masseter'],
    answer: 1
  },
  {
    q: 'Which muscle is positioned beneath the biceps',
    options: ['Brachialis', 'Brachioradialis', 'Anconeus', 'Teres minor'],
    answer: 0
  },
  {
    q: 'Where is the tendon of achilles positioned',
    options: ['Lower leg', 'Thigh', 'Knee', 'Elbow'],
    answer: 0
  },
  {
    q: 'Lumbago is known as',
    options: ['Inflammation of soft tissues', 'Inflammation of muscles', 'Fibrositis in the lower back', 'Fibrositis in upper back'],
    answer: 2
  },
  {
    q: 'What is the action of the temporalis',
    options: ['Opens mouth', 'Retracts lower jaw', 'Flexes head', 'Raises and retracts lower jaw'],
    answer: 3
  },
  {
    q: 'What is the position of the occipitalis',
    options: ['Over the occipital bone', 'Over the frontal bone', 'Sides of the nose', 'Over the parietal bone'],
    answer: 0
  },
  {
    q: 'What is the structure of cardiac muscle',
    options: ['Spindle shaped cells with several nuclei', 'Cylindrical cells with no nucleus and a membrane', 'Striated fibres with no nucleus', 'Striated fibres with a nucleus'],
    answer: 3
  },
  {
    q: 'What muscle does not flex the hip',
    options: ['Vastus lateralis', 'Sartorius', 'Rectus femoris', 'Ilio psoas'],
    answer: 0
  },
  {
    q: 'Where are the erector spinae positioned',
    options: ['Chest', 'Either side of the spine', 'Top of the scapula', 'Neck'],
    answer: 1
  },
  {
    q: 'Where is the anconeus positioned',
    options: ['Forearm', 'Wrist', 'Elbow', 'Shoulder'],
    answer: 2
  },
  {
    q: 'What is the action of the flexor carpi ulnaris',
    options: ['Pronates forearm', 'Flexes elbow joint', 'Extends elbow', 'Flexes wrist joint'],
    answer: 3
  },
  {
    q: 'Which muscle adducts and rotates the femur medially',
    options: ['Vastus lateralis', 'Gastrocnemius', 'Soleus', 'Gracilis'],
    answer: 3
  },
  {
    q: 'Which muscle extends the foot',
    options: ['Extensor digitorum longus', 'Tibialis anterior', 'Peroneus longus', 'Soleus'],
    answer: 0
  },
  {
    q: 'How is movement created in skeletal muscle',
    options: ['A muscle needs to pass over a joint to create movement', 'Motor nerves enter the muscle creating movement', 'A muscle is attached to the tendon which enables movement', 'Muscle fibres are stimulated contracting the muscle'],
    answer: 3
  },
  {
    q: 'What is the action of the sartorius',
    options: ['Rotates femur medially', 'Flexes hip and knee', 'Extends hip and knee', 'Extends knee'],
    answer: 1
  },
  {
    q: 'Which muscle makes up the calf muscle',
    options: ['Soleus', 'Gracilis', 'Peroneus longus', 'Gastrocnemius'],
    answer: 3
  },
  {
    q: 'Lack of tension in a muscle is known as',
    options: ['Myositis', 'Atony', 'Atrophy', 'Rupture'],
    answer: 1
  },
  {
    q: 'Which muscle is positioned at the side of the scapula',
    options: ['Infraspinatus', 'Supraspinatus', 'Teres major', 'Serratus anterior'],
    answer: 2
  },
  {
    q: 'Where is the gluteus minimus positioned',
    options: ['Above the gluteus maximus', 'Pelvic floor', 'Underneath gluteus medius', 'Side of thorax'],
    answer: 2
  },
  {
    q: 'What is the position of the flexor carpi ulnaris',
    options: ['Anterior forearm', 'Lateral anterior forearm', 'Posterior forearm', 'Wrist joint'],
    answer: 0
  },
  {
    q: 'The levator labii superioris produces which expression',
    options: ['Grinning', 'Annoying expression', 'Disgusted expression', 'Cheerful expression'],
    answer: 3
  },
  {
    q: 'What is the action of the procerus nasi',
    options: ['Wrinkles at the bridge of the nose', 'Dilates nasal opening', 'Lifts upper lip', 'Purses lips'],
    answer: 0
  },
  {
    q: 'Moving a limb away from the midline is known as',
    options: ['Dorsiflexion', 'Flexion', 'Abduction', 'Extension'],
    answer: 2
  },
  {
    q: 'What direction does a muscle take',
    options: ['From its origin towards its insertion', 'From its insertion towards its origin', 'From the muscle fibres to the origin', 'From the belly of the muscle to its insertion'],
    answer: 0
  },
  {
    q: 'What is the action of the anconeus',
    options: ['Flexes wrist joint', 'Extends forearm', 'Extends wrist joint', 'Extends fingers'],
    answer: 1
  },
  {
    q: 'What is the position of the supinator radii brevi',
    options: ['Elbow', 'Lateral forearm', 'Lateral anterior forearm', 'Posterior forearm'],
    answer: 3
  },
  {
    q: 'A burst in the sheath surrounding the muscle is called',
    options: ['Strain', 'Sprain', 'Rupture', 'Fibrositis'],
    answer: 2
  },
  {
    q: 'Which muscle is positioned on the front of the lower leg',
    options: ['Extensor digitorum longus', 'Peroneus longus', 'Gastrocnemius', 'Flexor digitorum longus'],
    answer: 0
  },
  {
    q: 'Bending a limb inwards is known as',
    options: ['Adduction', 'Flexion', 'Supination', 'Inversion'],
    answer: 3
  },
  {
    q: 'Flexing a foot with the toe down and the heel up is known as',
    options: ['Plantarflexion', 'Pronation', 'Dorsiflexion', 'Eversion'],
    answer: 0
  },
  {
    q: 'Where is the sternocleidomastoid positioned',
    options: ['Back of the neck', 'Shoulders', 'Sides of the neck', 'Neck to the trunk'],
    answer: 2
  },
  {
    q: 'What is the action of the coracobrachialis',
    options: ['Adducts humerus', 'Extends elbow joint', 'Abducts humerus', 'Flexes elbow joint'],
    answer: 0
  },
  {
    q: 'Which muscle adducts the ulna',
    options: ['Pronator Teres', 'Brachioradialis', 'Flexor carpi ulnaris', 'Extensor carpi ulnaris'],
    answer: 2
  },
  {
    q: 'Eversion describes',
    options: ['Bending a limb outwards', 'Turning a limb to face downwards', 'Turning a limb outwards away from the centre', 'Bending a limb to face upwards'],
    answer: 2
  },
  {
    q: 'Which muscle is positioned on top of the semimembranosus',
    options: ['Gastrocnemius', 'Semitendinosus', 'Gracilis', 'Adductor magnus'],
    answer: 1
  },
  {
    q: 'What is the action of the tibialis anterior',
    options: ['Plantarflexes foot', 'Inverts foot', 'Plantarflexes and everts foot', 'Flexes toes'],
    answer: 1
  },
  {
    q: 'What is the position of the vastus lateralis',
    options: ['Medial and front of thigh', 'Front of thigh', 'Medial side of the knee', 'Lateral and front of thigh'],
    answer: 3
  },
  {
    q: 'Which muscle does not extend the hip',
    options: ['Biceps femoris', 'Semitendinosus', 'Semimembranosus', 'Rectus femoris'],
    answer: 3
  },
  {
    q: 'Which muscle surrounds the eye',
    options: ['Orbicularis oris', 'Levator palpebrae', 'Orbicularis oculi', 'Temporalis'],
    answer: 2
  },
  {
    q: 'What is the action of the anterior deltoid',
    options: ['Draws arm backwards', 'Elevates shoulders', 'Rotates scapula', 'Draws arm forward'],
    answer: 3
  },
  {
    q: 'What is the action of the gluteus maximus',
    options: ['Flexes hip', 'Medial rotation of femur', 'Lateral rotation of hip', 'Flexes vertebral column'],
    answer: 2
  },
  {
    q: 'What is the action of the pronator teres',
    options: ['Flexes wrist joint', 'Pronates forearm', 'Flexes finger', 'Extends elbow'],
    answer: 1
  },
  {
    q: 'Which muscle adducts the arm',
    options: ['Latissimus dorsi', 'Erector spinae', 'Supraspinatus', 'Splenius capitis'],
    answer: 0
  },
  {
    q: 'Which muscle opens the upper eyelid',
    options: ['Levator palpebrae', 'Masseter', 'Orbicularis oculi', 'Sternocleidomastoid'],
    answer: 0
  },
  {
    q: 'What is the structure of fascia',
    options: ['White fibrous muscle fibres', 'White fibrous connective tissue', 'White fibrous elastic tissue', 'White fibrous elastic cords'],
    answer: 1
  },
  {
    q: 'What is the position of the adductor longus',
    options: ['Front of the thigh', 'Lateral and front of thigh', 'Lateral front of lower leg', 'Medial side of thigh'],
    answer: 3
  },
  {
    q: 'Which muscle is positioned on the medial and front of the thigh',
    options: ['Vastus lateralis', 'Rectus femoris', 'Vastus intermedius', 'Vastus medialis'],
    answer: 3
  },
  {
    q: 'What is the action of the extensor carpi radialis',
    options: ['Extends fingers', 'Extends wrist', 'Extends elbow', 'Extends forearm'],
    answer: 1
  },
  {
    q: 'What muscle is positioned on the posterior forearm',
    options: ['Brachialis', 'Flexor carpi radialis', 'Triceps', 'Extensor carpi ulnaris'],
    answer: 3
  },
  {
    q: 'Where is the trapezius positioned',
    options: ['Lower back', 'Shoulders', 'Neck', 'Upper back'],
    answer: 3
  },
  {
    q: 'Which muscle abducts the femur',
    options: ['Gluteus minimus', 'Gluteus maximus', 'Semitendinosus', 'Gracilis'],
    answer: 0
  },
  {
    q: 'What muscle rotates the scapula',
    options: ['Sternocleidomastoid', 'Serratus anterior', 'Pectoralis major', 'Deltoid'],
    answer: 1
  },
  {
    q: 'What muscle runs from the neck to the trunk',
    options: ['Splenius capitis', 'Sternocleidomastoid', 'Levator scapulae', 'Trapezius'],
    answer: 3
  },
  {
    q: 'What is the action of the depressor anguli oris',
    options: ['Raises the mandible', 'Retracts lower jaw', 'Pulls down corners of the mouth', 'Pull down lower lip'],
    answer: 2
  },
  {
    q: 'Where is the mentalis positioned',
    options: ['Across the cheek bone', 'Forehead', 'Chin', 'Nose'],
    answer: 2
  },
  {
    q: 'Which muscle is responsible for smiling',
    options: ['Levator anguli oris', 'Zygomaticus', 'Buccinator', 'Levator labii superioris'],
    answer: 1
  },
  {
    q: 'Flexion of the foot up is known as',
    options: ['Pronation', 'Plantarflexion', 'Supination', 'Dorsiflexion'],
    answer: 3
  },
  {
    q: 'Which muscle is positioned on the posterior forearm',
    options: ['Flexor carpi ulnaris', 'Brachioradialis', 'Coracobrachialis', 'Extensor carpi ulnaris'],
    answer: 3
  },
  {
    q: 'The moving end of a muscle is called',
    options: ['The insertion', 'The origin', 'The attachment', 'The belly'],
    answer: 0
  },
  {
    q: 'Where is the nasalis positioned',
    options: ['Above the eyebrows', 'Between the upper lip and bottom of nose', 'Sides of the nose', 'Between the eyebrows'],
    answer: 2
  },
  {
    q: 'Which muscle stretches from the modiolus to the mandible',
    options: ['Masseter', 'Zygomaticus', 'Temporalis', 'Depressor anguli oris'],
    answer: 3
  },
  {
    q: 'Which muscle purses the lips',
    options: ['Orbicularis oris', 'Levator anguli oris', 'Orbicularis oculi', 'Lateral pterygoid'],
    answer: 0
  },
  {
    q: 'Which muscles flexes the fingers',
    options: ['Flexor carpi ulnaris', 'Flexor digitorum superficialis', 'Flexor carpi radialis', 'Anconeus'],
    answer: 1
  },
  {
    q: 'Which muscle is positioned on the outside of the back of the thigh',
    options: ['Biceps femoris', 'Gracilis', 'Adductor magnus', 'Semimembranosus'],
    answer: 0
  },
  {
    q: 'Which muscle is responsible for grinning',
    options: ['Temporalis', 'Levator palpebrae', 'Risorius', 'Mentalis'],
    answer: 2
  },
  {
    q: 'Mastication is another term for',
    options: ['Grinning', 'Chewing', 'Smiling', 'Sniffing'],
    answer: 1
  },
  {
    q: 'What is the action of the splenius capitis',
    options: ['Flexes the head', 'Extends the head', 'Raises shoulders', 'Draws arm backwards'],
    answer: 1
  },
  {
    q: 'What is the position of the flexor carpi digitorum',
    options: ['Anterior forearm', 'Posterior forearm', 'Fingers', 'Wrist'],
    answer: 0
  },
  {
    q: 'Fibrositis of the sternocleidomastoid is known as',
    options: ['Sprain', 'Torticollis', 'Lumbago', 'Myositis'],
    answer: 1
  },
  {
    q: 'What muscle flexes the foot',
    options: ['Flexor digitorum longus', 'Tibialis anterior', 'Tendon of achilles', 'Sartorius'],
    answer: 1
  },
  {
    q: 'Which muscle is not positioned on the posterior forearm',
    options: ['Anconeus', 'Extensor carpi ulnaris', 'Extensor carpi digitorum', 'Supinator radii brevi'],
    answer: 0
  },
  {
    q: 'What is the action of the middle deltoid',
    options: ['Draws arm forward', 'Abducts the arm', 'Adducts the arm', 'Draws arm backward'],
    answer: 1
  },
  {
    q: 'What is the action of the supraspinatus',
    options: ['Abducts arm', 'Rotates arm medially', 'Rotates arm laterally', 'Adducts arm'],
    answer: 0
  },
  {
    q: 'Where are the deltoids positioned',
    options: ['Shoulder', 'Arm', 'Upper back', 'Abdominals'],
    answer: 0
  },
  {
    q: 'The orbicularis oris is positioned',
    options: ['Across the face', 'Around the mouth', 'Chin', 'From the forehead to the nose'],
    answer: 1
  },
  {
    q: 'Which one of the following is the chief muscle of mastication',
    options: ['Buccinator', 'Orbicularis oculi', 'Mentalis', 'Masseter'],
    answer: 3
  },
  {
    q: 'Which muscle assists the triceps in extension',
    options: ['Anconeus', 'Biceps', 'Teres major', 'Deltoid'],
    answer: 0
  },
  {
    q: 'What is the position of the masseter',
    options: ['From zygomatic arch to mandible', 'Around the eye', 'Between masseter and corner of mouth', 'Upper eyelid'],
    answer: 0
  },
  {
    q: 'The belly of a muscle describes',
    options: ['The insertion point of the muscle', 'The fixed end of the muscle', 'The contracting muscle', 'The thickest part of the muscle'],
    answer: 3
  },
  {
    q: 'The inability of a muscle to contract is affected by which one of the following',
    options: ['Strength of the stimulus from the nerve', 'Presence of waste products', 'Temperature of muscle', 'Lactic acid'],
    answer: 1
  },
  {
    q: 'What is the action of the extensor digitorum longus',
    options: ['Extends toes', 'Flexes toes', 'Everts foot', 'Plantarflexes foot'],
    answer: 0
  },
  {
    q: 'What is the position of the peroneus longus',
    options: ['Anterior and lateral side of leg', 'Posterior lower leg', 'Anterior and medial side of leg', 'Anterior lower leg'],
    answer: 0
  },
  {
    q: 'What is the action of the extensor carpi digitorum',
    options: ['Extends fingers', 'Extends elbow', 'Extends wrist', 'Supinates forearm'],
    answer: 0
  },
  {
    q: 'What is the action of the gluteus minimus',
    options: ['Rotates femur laterally', 'Rotates femur medially', 'Rotates hip laterally', 'Rotates hip medially'],
    answer: 1
  },
  {
    q: 'Which muscle flexes the humerus',
    options: ['Biceps', 'Brachioradialis', 'Flexor carpi ulnaris', 'Coracobrachialis'],
    answer: 0
  },
  {
    q: 'Which muscle extends the vertebral column',
    options: ['Internal oblique', 'Transverse abdominus', 'External oblique', 'Erector spinae'],
    answer: 3
  },
  {
    q: 'Which muscle rotates the arm inwards',
    options: ['Sternocleidomastoid', 'Deltoid', 'Pectoralis major', 'Serratus anterior'],
    answer: 2
  },
  {
    q: 'Which one of the following does not flex the vertebral column',
    options: ['Internal oblique', 'External oblique', 'Ilio psoas', 'Rectus Abdominis'],
    answer: 2
  },
  {
    q: 'What is the structure of deep fascia',
    options: ['Made of tendinous fibres', 'Made of unmyelinated sheath fibres', 'Made of connective tissue', 'Made of white fibrous connective tissue'],
    answer: 3
  },
  {
    q: 'Bending a limb outwards is known as',
    options: ['Abduction', 'Eversion', 'Rotation', 'Extension'],
    answer: 1
  },
  {
    q: 'Where is the procerus nasi positioned',
    options: ['Sides of the nose', 'Between eyebrows', 'Lower lip', 'Above the eyebrow'],
    answer: 1
  },
  {
    q: 'Which muscle is responsible for sniffing',
    options: ['Procerus nasi', 'Frontalis', 'Masseter', 'Nasalis'],
    answer: 3
  },
  {
    q: 'Which muscle lifts the upper lip only',
    options: ['Levator labii superioris', 'Zygomaticus', 'Levator palpebrae', 'Splenius capitis'],
    answer: 0
  },
  {
    q: 'What is the position of the medial pterygoid',
    options: ['From the temporal bone to the mandible', 'Upper eyelid', 'Inner surface of mandible', 'Across the cheekbone'],
    answer: 2
  },
  {
    q: 'Over stimulation of muscle fibres causes',
    options: ['Muscle tension', 'Muscle contraction', 'Muscle relaxation', 'Isometric contraction'],
    answer: 0
  },
  {
    q: 'What is the position of the sartorius',
    options: ['Crosses hip to medial side of knee', 'Crosses hip to lateral side of knee', 'Crosses from the hip to behind the knee', 'Deep to the adductor brevis'],
    answer: 0
  },
  {
    q: 'Which muscle extends the knee',
    options: ['Biceps femoris', 'Semitendinosus', 'Vastus intermedius', 'Tibialis anterior'],
    answer: 2
  },
  {
    q: 'What is the action of the semitendinosus',
    options: ['Extends knee', 'Extends hip', 'Flexes hip', 'Extends foot'],
    answer: 1
  },
  {
    q: 'What muscle is positioned underneath soleus',
    options: ['Tendon of achilles', 'Peroneus longus', 'Flexor digitorum longus', 'Extensor digitorum longus'],
    answer: 2
  },
  {
    q: 'A build up of lactic acid inside muscles is known as',
    options: ['Fibrositis', 'Atony', 'Spasm', 'Spasticity'],
    answer: 3
  },
  {
    q: 'Where is the teres minor positioned',
    options: ['Side of scapula', 'Top of scapula', 'Between scapula and spine', 'Below scapula'],
    answer: 0
  },
  {
    q: 'Which muscle raises the trunk after stooping',
    options: ['Gluteus maximus', 'Gluteus minimus', 'Gluteus medius', 'Erector spinae'],
    answer: 3
  },
  {
    q: 'Which muscle adducts the femur',
    options: ['Gluteus medius', 'Biceps femoris', 'Adductor magnus', 'Sartorius'],
    answer: 2
  },
  {
    q: 'Where are the gluteus medius positioned',
    options: ['Lower buttocks', 'Deep to the gluteus minimus', 'Deep to the gluteus maximus', 'Pelvic floor'],
    answer: 2
  },
  {
    q: 'Where are the internal and external obliques positioned',
    options: ['Abdominal wall', 'Waist', 'Deep to the abdominal wall', 'Side of thorax'],
    answer: 3
  },
  {
    q: 'Turning a limb towards the centre is known as',
    options: ['Inversion', 'Abduction', 'Eversion', 'Extension'],
    answer: 0
  },
  {
    q: 'The levator labii superioris is positioned',
    options: ['Below the eyebrows', 'Between the eyebrows', 'From the eye to the mouth', 'Below the lower lip'],
    answer: 2
  },
  {
    q: 'What is the position of the zygomaticus',
    options: ['Between the chin and lower lip', 'Under the mandible', 'Forehead', 'Across the face'],
    answer: 3
  },
  {
    q: 'Which muscle produces an annoyed expression',
    options: ['Frontalis', 'Nasalis', 'Levator palpebrae', 'Temporalis'],
    answer: 1
  },
  {
    q: 'The opposing, relaxing muscle is called',
    options: ['The insertion', 'The antagonist', 'The muscle belly', 'The agonist'],
    answer: 1
  },
  {
    q: 'What is the action of the adductor magnus',
    options: ['Adducts femur', 'Abducts femur', 'Extends knee', 'Flexes knee'],
    answer: 0
  },
  {
    q: 'What is the position of the vastus intermedius',
    options: ['Medial aspect of thigh', 'Front of thigh', 'Lateral front of thigh', 'Deep to soleus'],
    answer: 1
  },
  {
    q: 'What is the action of the supinator radii brevi',
    options: ['Extends fingers', 'Adducts humerus', 'Supinates forearm', 'Extends wrist'],
    answer: 2
  },
  {
    q: 'What is the position of the semimembranosus',
    options: ['Lateral aspect of thigh', 'Front of thigh', 'Medial aspect of back of thigh', 'Back of thigh'],
    answer: 2
  },
  {
    q: 'Which muscle flexes the knee',
    options: ['Gracilis', 'Soleus', 'Peroneus longus', 'Rectus femoris'],
    answer: 0
  },
  {
    q: 'Which 2 muscles form the tendon of achilles',
    options: ['Gracilis and soleus', 'Peroneus longus and gracilis', 'Soleus and gastrocnemius', 'Gastrocnemius and peroneus longus'],
    answer: 2
  },
  {
    q: 'What is the action of the teres minor',
    options: ['Draws arm backwards', 'Lateral rotation of humerus', 'Draws shoulder forward', 'Medial rotation of humerus'],
    answer: 1
  },
  {
    q: 'What is the action of the rectus abdominis',
    options: ['Extends vertebral column', 'Rotates femur medially', 'Supports viscera', 'Produces rotation'],
    answer: 2
  },
  {
    q: 'Adduction describes',
    options: ['Moving a limb away from the midline', 'Moving a limb towards the midline', 'Turning a limb to face upwards', 'Turning a limb towards the centre'],
    answer: 1
  },
  {
    q: 'What is the action of the zygomaticus',
    options: ['Pulls lower lip down', 'Lifts upper lip', 'Moves angle of mouth up, back and out', 'Purses lips'],
    answer: 2
  },
  {
    q: 'Which muscle is positioned under rectus femoris',
    options: ['Vastus intermedius', 'Semimembranosus', 'Vastus lateralis', 'Transverse abdominis'],
    answer: 0
  },
  {
    q: 'Which muscle plantarflexes the ankle',
    options: ['Soleus', 'Flexor digitorum longus', 'Tibialis anterior', 'Tendon of achilles'],
    answer: 0
  },
  {
    q: 'What muscle is positioned at the back of the lower leg',
    options: ['Peroneus longus', 'Gastrocnemius', 'Tibialis anterior', 'Sartorius'],
    answer: 1
  },
  {
    q: 'What muscle flexes the toes',
    options: ['Tibialis anterior', 'Flexor digitorum longus', 'Soleus', 'Gracilis'],
    answer: 1
  },
  {
    q: 'What is the position of the infraspinatus',
    options: ['Chest', 'Scapula', 'Neck', 'Buttocks'],
    answer: 1
  },
  {
    q: 'What is the action of the rhomboids',
    options: ['Draws shoulder forward', 'Abducts arm', 'Adducts scapula', 'Abducts scapula'],
    answer: 2
  },
  {
    q: 'What is the action of the levator anguli oris',
    options: ['Raises the corner of the mouth', 'Lifts upper lip', 'Moves mouth back and up', 'Raises the mandible'],
    answer: 0
  },
  {
    q: 'What muscle is positioned underneath the gastrocnemius',
    options: ['Peroneus longus', 'Tibialis anterior', 'Soleus', 'Extensor digitorum longus'],
    answer: 2
  },
  {
    q: 'What is the main muscle responsible for walking',
    options: ['Gastrocnemius', 'Peroneus longus', 'Soleus', 'Gracilis'],
    answer: 2
  },
  {
    q: 'What is the action of the semimembranosus',
    options: ['Flexes toes', 'Flexes knee, extends hip', 'Extends knee, flexes hip', 'Extends foot'],
    answer: 1
  },
  {
    q: 'Which muscle is positioned on the top of the scapula',
    options: ['Rhomboids', 'Splenius capitis', 'Supraspinatus', 'Infraspinatus'],
    answer: 2
  },
  {
    q: 'Where is the latissimus dorsi positioned',
    options: ['Upper back', 'Covers back', 'Lower back', 'Shoulders'],
    answer: 1
  },
  {
    q: 'Where is the serratus anterior positioned',
    options: ['Chest', 'Shoulder', 'Abdominal wall', 'Side of thorax'],
    answer: 3
  },
  {
    q: 'Which muscle flexes the vertebral column',
    options: ['Pectoralis major', 'External oblique', 'Ilio psoas', 'Serratus anterior'],
    answer: 1
  },
  {
    q: 'Which muscle turns the lower lip outwards',
    options: ['Depressor anguli oris', 'Masseter', 'Medial pterygoid', 'Mentalis'],
    answer: 3
  },
  {
    q: 'What is the action of the posterior deltoid',
    options: ['Draws arm backwards', 'Lowers scapula', 'Adducts arms', 'Adducts leg'],
    answer: 0
  },
  {
    q: 'Where is the pectoralis major positioned',
    options: ['Waist', 'Chest', 'Shoulder', 'Arm'],
    answer: 1
  },
  {
    q: 'What is the position of the depressor labii inferioris',
    options: ['Between masseter and corner of mouth', 'Mid line of chin to lower lip', 'Across the face', 'From temporal bone to mandible'],
    answer: 1
  },
  {
    q: 'Which one of the following is not an action of the latissimus dorsi',
    options: ['Draws arm backwards', 'Adducts the arm', 'Rotates the arm medially', 'Abducts the arm'],
    answer: 3
  },
  {
    q: 'What is the position of the levator palpebrae',
    options: ['Between the eyes', 'Chin', 'Deep to the zygomaticus', 'Upper eyelid'],
    answer: 3
  },
  {
    q: 'Which type of arthritis attacks the synovial membranes',
    options: ['Rheumatoid arthritis', 'Osteo arthritis', 'Degenerative arthritis', 'Chronic arthritis'],
    answer: 0
  },
  {
    q: 'What type of bones allow movement',
    options: ['Short bones', 'Flat bones', 'Sesamoid bones', 'Long bones'],
    answer: 3
  },
  {
    q: 'Which bone helps to form the orbital cavity',
    options: ['Ethmoid', 'Lacrimal', 'Sphenoid', 'Parietal'],
    answer: 0
  },
  {
    q: 'Which bone joins the foot to the leg',
    options: ['navicular', 'Cuboid', 'Cuneiform', 'Talus'],
    answer: 3
  },
  {
    q: 'Which type of joint is the least moveable of joints',
    options: ['Hinge joint', 'Ball & Socket joint', 'Gliding joint', 'Saddle joint'],
    answer: 0
  },
  {
    q: 'Inflammation of the joints is known as',
    options: ['Gout', 'Osteoporosis', 'Neuritis', 'Arthritis'],
    answer: 3
  },
  {
    q: 'Which bone contains the upper teeth',
    options: ['Mandible', 'Sphenoid', 'Maxilla', 'Vomer'],
    answer: 2
  },
  {
    q: 'Which type of vertebrae is not known as true vertebrae',
    options: ['Cervical', 'Sacral', 'Thoracic', 'Lumbar'],
    answer: 1
  },
  {
    q: 'How many bones does the coccygeal contain',
    options: ['4', '12', '5', '7'],
    answer: 0
  },
  {
    q: 'What is the structure of slightly moveable joints',
    options: ['Pad of white fibrocartilage between the bones', 'Muscular tissue between the bones', 'Fibrous tissue between the ends of the bones', 'A pad of fibrocartilage between the ends of bones'],
    answer: 3
  },
  {
    q: 'The fibula is a type of',
    options: ['Short bone', 'Irregular bone', 'Flat bone', 'Long bone'],
    answer: 3
  },
  {
    q: 'Brittle bone disease is known as',
    options: ['Osteoporosis', 'Rheumatoid arthritis', 'Fracture', 'Slipped disc'],
    answer: 0
  },
  {
    q: 'How many bones does an adult skeleton have',
    options: ['240', '206', '160', '200'],
    answer: 1
  },
  {
    q: 'Which of the following is a type of sesamoid bone',
    options: ['Maxilla', 'Patella', 'Humerus', 'Tarsals'],
    answer: 1
  },
  {
    q: 'The cheek bone is known as',
    options: ['Zygomatic', 'Turbinator', 'Frontal', 'Occipital'],
    answer: 0
  },
  {
    q: 'Which part of the vertebral column carries the ribs',
    options: ['Thoracic', 'Lumbar', 'Cervical', 'Coccygeal'],
    answer: 0
  },
  {
    q: 'Deposition of uric acid crystals within the joint capsule is known as',
    options: ['Gout', 'Osteo arthritis', 'Chronic arthritis', 'Poly arthritis'],
    answer: 0
  },
  {
    q: 'The shoulder is an example of which type of joint',
    options: ['Pivot', 'Ball & Socket', 'Saddle', 'Gliding'],
    answer: 1
  },
  {
    q: 'Where is cancellous bone found',
    options: ['Ends of long bones and in irregular bones', 'Ends of irregular bones', 'Ends of long bones and in irregular, flat and sesamoid bones', 'Ends of long bones and in flat bones'],
    answer: 2
  },
  {
    q: 'What parts of the body does the axial skeleton support',
    options: ['Head and neck', 'Lower limbs', 'Head, neck and torso', 'Shoulder girdle and upper limbs'],
    answer: 2
  },
  {
    q: 'The kneecap is also known as',
    options: ['The femur', 'The patella', 'The Hyoid', 'The occipital'],
    answer: 1
  },
  {
    q: 'An exaggerated outward curvature of the spine is known as',
    options: ['Lordosis', 'Scoliosis', 'Compound curvature', 'Kyphosis'],
    answer: 3
  },
  {
    q: 'The clavicle is more commonly referred to as',
    options: ['The shoulder blade', 'The collar bone', 'The lower back', 'The breast bone'],
    answer: 1
  },
  {
    q: 'Which of the following is a type of poly arthritis',
    options: ['Gout', 'Osteo arthritis', 'Acute arthritis', 'Rheumatoid arthritis'],
    answer: 3
  },
  {
    q: 'Short bones can be defined as',
    options: ['Protective bones with broad flat surfaces', 'Strong and compact bones that require little movement', 'Bones within tendons', 'The body\'s levers'],
    answer: 1
  },
  {
    q: 'How many bones does the cervical vertebra contain',
    options: ['12', '5', '4', '7'],
    answer: 3
  },
  {
    q: 'What type of bone is the hyoid bone',
    options: ['Sesamoid bone', 'Flat bone', 'Small bone', 'Irregular bone'],
    answer: 3
  },
  {
    q: 'Which bone separates the nasal cavities',
    options: ['Vomer', 'Sphenoid', 'Parietal', 'Lacrimal'],
    answer: 0
  },
  {
    q: 'The coccyx is formed by the',
    options: ['Thoracic', 'Lumbar', 'Sacral', 'Coccygeal'],
    answer: 3
  },
  {
    q: 'Which type of joint is only found between the phalanges of the thumb and its metacarpal',
    options: ['Hinge', 'Gliding', 'Pivot', 'Saddle'],
    answer: 3
  },
  {
    q: 'An incomplete fracture of a long bone is called',
    options: ['An impacted fracture', 'A greenstick fracture', 'A comminuted fracture', 'A complicated fracture'],
    answer: 1
  },
  {
    q: 'The metacarpals are known as',
    options: ['Finger bones', 'Toe bones', 'Palm bones', 'Ankle bones'],
    answer: 2
  },
  {
    q: 'Which one of the following is not found in haversian canals',
    options: ['Blood vessels', 'Nerves', 'Lymph capillaries', 'Bone marrow'],
    answer: 3
  },
  {
    q: 'Which bone is positioned on the inside of each arm towards the thumb',
    options: ['Radius', 'Humerus', 'Capitate', 'Ulna'],
    answer: 0
  },
  {
    q: 'Sesamoid bones can be defined as',
    options: ['The body\'s levers', 'Strong and compact bones', 'Bones within tendons', 'Protective bones with broad flat surfaces'],
    answer: 2
  },
  {
    q: 'What type of bone is the ulna',
    options: ['Long bone', 'Short bone', 'Sesamoid bone', 'Irregular bone'],
    answer: 0
  },
  {
    q: 'The bone on the sides and lower cranium is known as',
    options: ['Parietal', 'Lacrimal', 'Occipital', 'Temporal'],
    answer: 3
  },
  {
    q: 'Fixed vertebrae are',
    options: ['Cervical', 'Sacral and coccygeal', 'Lumbar', 'Thoracic'],
    answer: 1
  },
  {
    q: 'Which bone is positioned on the lateral side of each arm towards the little finger',
    options: ['Humerus', 'Ulna', 'Carpals', 'Radius'],
    answer: 1
  },
  {
    q: 'The zygomatic bone is a type of',
    options: ['Flat bone', 'Sesamoid bone', 'Irregular bone', 'Short bone'],
    answer: 2
  },
  {
    q: 'A broken bone which damages the tissue around it is called',
    options: ['A comminuted fracture', 'A simple fracture', 'A complicated fracture', 'An impacted fracture'],
    answer: 2
  },
  {
    q: 'Which one of the following is not a tarsal',
    options: ['Talus', 'Cuboid', 'Pisiform', 'Calcaneus'],
    answer: 2
  },
  {
    q: 'How many bones does the sacral vertebrae contain',
    options: ['12', '5', '4', '7'],
    answer: 1
  },
  {
    q: 'What is the foramen magnus',
    options: ['An exaggerated inward curvature of the spine', 'A large opening in the occipital bone through which the upper spinal cord passes', 'An opening for the passage of the nasolacrimal duct', 'A large bone which forms the chin and sides of the face'],
    answer: 1
  },
  {
    q: 'Bones with broad flat surfaces for muscle attachment are known as',
    options: ['Flat bones', 'Irregular', 'Long bones', 'Sesamoid bones'],
    answer: 0
  },
  {
    q: 'The mandible is also known as',
    options: ['The forehead', 'The upper jaw', 'The cheekbone', 'The lower jaw'],
    answer: 3
  },
  {
    q: 'The spinal cord is made up of how many vertebrae',
    options: ['33', '21', '23', '30'],
    answer: 0
  },
  {
    q: 'How many metatarsals are there in each foot',
    options: ['14', '5', '10', '7'],
    answer: 1
  },
  {
    q: 'Saddle joints allow',
    options: ['Movement around 2 axes', 'Movement in 2 directions', 'Movement in 1 direction only', 'Movement around 1 axis only'],
    answer: 0
  },
  {
    q: 'The lumbar vertebrae is positioned where in the body',
    options: ['Neck', 'Pelvis', 'Upper back', 'Lower back'],
    answer: 3
  },
  {
    q: 'What type of arthritis causes severe deformity and immobility',
    options: ['Osteo arthritis', 'Ankylosing spondylitis', 'Rheumatoid arthritis', 'Degenerative arthritis'],
    answer: 2
  },
  {
    q: 'What type of bone is the maxilla',
    options: ['Long bone', 'Flat bone', 'Sesamoid bone', 'Irregular bone'],
    answer: 3
  },
  {
    q: 'Which bone forms the base of the cranium',
    options: ['Sphenoid', 'Occipital', 'Parietal', 'Ethmoid'],
    answer: 1
  },
  {
    q: 'Where is the Hyoid bone positioned',
    options: ['Arm', 'Leg', 'Nose', 'Base of the tongue'],
    answer: 3
  },
  {
    q: 'Synovial joints are known as',
    options: ['Slightly moveable joints', 'Fibrous joints', 'Fixed joints', 'Freely moveable joints'],
    answer: 3
  },
  {
    q: 'The ankle is an example of which type of joint',
    options: ['Pivot', 'Hinge', 'Gliding', 'Saddle'],
    answer: 1
  },
  {
    q: 'Which one of the following is an effect of osteo arthritis',
    options: ['Chronic destruction of joints', 'Severe deformity', 'Cartilage of joints breaks down', 'Brittleness of bones'],
    answer: 2
  },
  {
    q: 'Which bone contains the lower teeth',
    options: ['Parietal', 'Vomer', 'Mandible', 'Hyoid'],
    answer: 2
  },
  {
    q: 'How many bones does the thoracic vertebrae have',
    options: ['5', '12', '7', '4'],
    answer: 1
  },
  {
    q: 'Which bone is positioned on the medial lower leg',
    options: ['Radius', 'Patella', 'Fibula', 'Talus'],
    answer: 3
  },
  {
    q: 'What type of bone is the vomer',
    options: ['Short', 'Long', 'Sesamoid', 'Flat'],
    answer: 3
  },
  {
    q: 'Where is compact bone found',
    options: ['On the outside of most bones and in the shaft of long bones', 'On the ends of long bones and flat bones', 'On the inside of most bones and in the shaft of long bones', 'On the outside of flat and irregular bones and in the shaft of long bones'],
    answer: 0
  },
  {
    q: 'What part of the skull does the parietal bone form',
    options: ['Back of the cranium', 'Front of the cranium', 'Sides of the cranium', 'Top and sides of the cranium'],
    answer: 3
  },
  {
    q: 'The finger bones are called',
    options: ['The phalanges', 'The carpals', 'The metatarsals', 'The metacarpals'],
    answer: 0
  },
  {
    q: 'A compound fracture describes',
    options: ['A broken bone with damaged tissue around it', 'A bone broken in several places', 'A bone broken in one place', 'A broken bone which pierces the skin'],
    answer: 3
  },
  {
    q: 'Degenerative arthritis is also known as',
    options: ['Acute arthritis', 'Osteo arthritis', 'Rheumatoid arthritis', 'Chronic arthritis'],
    answer: 1
  },
  {
    q: 'What are bones made of',
    options: ['Osteoblasts', 'Blood vessels', 'Periosteum', 'Bone marrow'],
    answer: 0
  },
  {
    q: 'Which bone is found on the roof of the mouth',
    options: ['Mandible', 'Palatine', 'Vomer', 'Maxilla'],
    answer: 1
  },
  {
    q: 'Which of the following is not part of the innominate bone',
    options: ['Ilium', 'Sacrum', 'Ischium', 'Pubis'],
    answer: 1
  },
  {
    q: 'The ankle/heel bones are known as',
    options: ['Tarsals', 'Metacarpals', 'Carpals', 'Metatarsals'],
    answer: 0
  },
  {
    q: 'Which joint allows a rotary movement',
    options: ['Gliding', 'Ball & Socket', 'Pivot', 'Saddle'],
    answer: 2
  },
  {
    q: 'Which one of the following is a tarsal bone',
    options: ['Capitate', 'Triquetral', 'Trapezoid', 'Navicular'],
    answer: 3
  },
  {
    q: 'Which one of the following is a type of flat bone',
    options: ['Patella', 'Mandible', 'Nasal', 'Temporal'],
    answer: 2
  },
  {
    q: 'What type of bone resembles honeycomb',
    options: ['Cancellous bone', 'Sesamoid bone', 'Compact bone', 'Bone marrow'],
    answer: 0
  },
  {
    q: 'Which bone is the only moveable bone on the face',
    options: ['Mandible', 'Maxilla', 'Occipital', 'Frontal'],
    answer: 0
  },
  {
    q: 'What bones fuse to form the sacrum',
    options: ['Sacral vertebrae', 'Thoracic vertebrae', 'Cervical vertebrae', 'Coccygeal'],
    answer: 0
  },
  {
    q: 'Fibrous joints',
    options: ['Are freely moveable', 'Are slightly moveable', 'Have no movement', 'Move in one direction'],
    answer: 2
  },
  {
    q: 'An impacted fracture describes',
    options: ['A broken bone where one end is driven into the other', 'A bone broken in several places', 'A broken bone which damages tissue around it', 'A broken bone which pierces the skin'],
    answer: 0
  },
  {
    q: 'Which bone provides attachment for the tongue',
    options: ['Sphenoid', 'Ethmoid', 'Hyoid', 'Mandible'],
    answer: 2
  },
  {
    q: 'Which one of the following bones does not form the pelvis',
    options: ['Innominate bones', 'Coccyx', 'Sacrum', 'Femur'],
    answer: 3
  },
  {
    q: 'Which type of joint is the most moveable of all joints',
    options: ['Ball & Socket', 'Hinge', 'Gliding', 'Pivot'],
    answer: 0
  },
  {
    q: 'An exaggerated inward curvature of the spine is known as',
    options: ['Lordosis', 'Impacted curvature', 'Kyphosis', 'Scoliosis'],
    answer: 0
  },
  {
    q: 'The breast bone is also known as',
    options: ['The clavicle', 'The scapulae', 'The sternum', 'The pelvic girdle'],
    answer: 2
  },
  {
    q: 'Joints which allow movement in one direction only are called',
    options: ['Hinge joints', 'Saddle joints', 'Pivot joints', 'Ball & socket joints'],
    answer: 0
  },
  {
    q: 'How many tarsals are there in each ankle',
    options: ['14', '7', '5', '10'],
    answer: 1
  },
  {
    q: 'Where is the lacrimal bone positioned',
    options: ['Forehead', 'In the nasal cavity', 'Eye socket', 'Cheek'],
    answer: 2
  },
  {
    q: 'Where is bone marrow found',
    options: ['Compact bone', 'Haversian canals', 'Cancellous bone', 'Sesamoid bones'],
    answer: 2
  },
  {
    q: 'The flat part at the top of the sternum is called',
    options: ['Manubrium', 'Phalanges', 'Clavicle', 'Innominate bone'],
    answer: 0
  },
  {
    q: 'How many wrist bones are there in each wrist',
    options: ['5', '14', '6', '8'],
    answer: 3
  },
  {
    q: 'Cartilaginous joints are also known as',
    options: ['Slightly moveable joints', 'Pivot joints', 'Freely moveable joints', 'Fixed joints'],
    answer: 0
  },
  {
    q: 'Scoliosis causes',
    options: ['An exaggerated inward curvature of the spine', 'A sideways curvature of the spine', 'An exaggerated outward curvature of the spine', 'Exaggerated rounded shoulders'],
    answer: 1
  },
  {
    q: 'Tarsals fall under which category',
    options: ['Long bones', 'Irregular bones', 'Short bones', 'Sesamoid bones'],
    answer: 2
  },
  {
    q: 'Which one of the following is a type of irregular bone',
    options: ['Sphenoid', 'Lacrimal', 'Metacarpals', 'Scapula'],
    answer: 0
  },
  {
    q: 'Which bone forms the tear ducts',
    options: ['Frontal', 'Lacrimal', 'Ethmoid', 'Temporal'],
    answer: 1
  },
  {
    q: 'How many metacarpals are there in each hand',
    options: ['5', '8', '12', '4'],
    answer: 0
  },
  {
    q: 'Which one of the following is a wrist bone',
    options: ['Calcaneus', 'Sphenoid', 'Hamate', 'Ethmoid'],
    answer: 2
  },
  {
    q: 'What is the thigh bone called',
    options: ['Femur', 'Tibia', 'Fibula', 'Tarsal'],
    answer: 0
  },
  {
    q: 'What is the structure of fixed joints',
    options: ['A pad of white fibrocartilage between the bones', 'Fibrous tissue between the ends of the bones', 'A pad of fibrocartilage between the bones', 'Elastic tissue between the ends of the bones'],
    answer: 1
  },
  {
    q: 'A bone that is broken in several places is known as',
    options: ['A compound fracture', 'A comminuted fracture', 'A complicated fracture', 'An impacted fracture'],
    answer: 1
  },
  {
    q: 'Which one of the following is not a wrist bone',
    options: ['Trapezium', 'Capitate', 'Lunate', 'Medial'],
    answer: 3
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
    options: ['Addison\'s disease', 'Cushing\'s syndrome', 'Polycystic ovaries', 'Hirsutism'],
    answer: 1
  },
  {
    q: 'The pancreas secretes hormones which perform which function?',
    options: ['Regulate water absorption', 'Regulate mineral balance', 'Regulate calcium balance', 'Regulate glucose balance'],
    answer: 3
  },
  {
    q: 'Arteriosclerosis is defined as which of the following?',
    options: ['A build-up of fats inside the arteries', 'A degenerative disease of the arteries', 'Reduction in the ability to carry oxygen', 'The blood\'s inability to clot'],
    answer: 1
  },
  {
    q: 'Arteries have which of the following characteristics?',
    options: ['Carry oxygenated blood and have thick muscular walls', 'Carry deoxygenated blood and have thick muscular walls', 'Lie deep in the tissues and contain valves', 'Run alongside veins and have thin walls'],
    answer: 0
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
    q: 'Bell\'s palsy is defined as which of the following?',
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
    q: 'Trypsin digests which of the following?',
    options: ['Starch', 'Proteins', 'Fats', 'Carbohydrates'],
    answer: 1
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
    q: 'Which of the following is the part of the kidney which acts as a filter?',
    options: ['Loop of Henle', 'Glomerular capsule', 'Collecting tubule', 'The renal pelvis'],
    answer: 1
  },
  {
    q: 'Another name for nephritis is what?',
    options: ['Addison\'s disease', 'Cystitis', 'Bright\'s disease', 'S.A.D.'],
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
    q: 'Which muscle is responsible for flexing the elbow joint?',
    options: ['Triceps brachii', 'Biceps brachii', 'Deltoid', 'Trapezius'],
    answer: 1
  },
  {
    q: 'Which part of the nervous system is responsible for the \'fight or flight\' response?',
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
    q: 'What is the medical term for the \'true skin\' which contains blood vessels and nerves?',
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
    q: 'Which gland is known as the \'master gland\' because it controls other endocrine glands?',
    options: ['Thyroid gland', 'Pituitary gland', 'Adrenal gland', 'Pineal gland'],
    answer: 1
  },
  {
    q: 'What are the smallest blood vessels where gas and nutrient exchange occurs?',
    options: ['Arteries', 'Veins', 'Capillaries', 'Arterioles'],
    answer: 2
  },
  {
    q: 'Which lymphatic organ is responsible for \'recycling\' old red blood cells?',
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
    q: 'Which neurotransmitter is primarily involved in the transmission of signals at the neuromuscular junction?',
    options: ['Dopamine', 'Serotonin', 'Acetylcholine', 'Adrenaline'],
    answer: 2
  },
  {
    q: 'Which hormone regulates the body\'s basal metabolic rate?',
    options: ['Thyroxine', 'Oxytocin', 'Calcitonin', 'Cortisol'],
    answer: 0
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
    q: 'Which of the following bones is found in the lower arm on the \'thumb side\'?',
    options: ['Ulna', 'Humerus', 'Radius', 'Fibula'],
    answer: 2
  },
  {
    q: 'Which muscle is known as the \'tailor\'s muscle\' and is the longest muscle in the body?',
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
    q: 'In the cardiac cycle, what does \'systole\' refer to?',
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
    q: 'What is the name of the \'yellow body\' that forms in the ovary after ovulation and secretes progesterone?',
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
    q: 'Which of the following is an example of a \'long bone\'?',
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
    q: 'Which bone is commonly known as the \'shoulder blade\'?',
    options: ['Clavicle', 'Scapula', 'Sternum', 'Radius'],
    answer: 1
  },
  {
    q: 'Which muscle is the primary mover (agonist) for elbow flexion?',
    options: ['Triceps brachii', 'Biceps brachii', 'Deltoid', 'Pectoralis major'],
    answer: 1
  },
  {
    q: 'Which of the following describes \'isometric\' muscle contraction?',
    options: ['The muscle shortens', 'The muscle lengthens', 'The muscle length remains constant while tension increases', 'The muscle relaxes completely'],
    answer: 2
  },
  {
    q: 'Where is the gastrocnemius muscle located?',
    options: ['The thigh', 'The lower back', 'The posterior lower leg', 'The upper arm'],
    answer: 2
  },
  {
    q: 'What occurs when a muscle \'atrophies\'?',
    options: ['The muscle grows larger', 'The muscle fibres waste away or shrink', 'The muscle remains in partial contraction', 'The muscle becomes more flexible'],
    answer: 1
  },
  {
    q: 'Which muscle group is located on the anterior thigh?',
    options: ['Hamstrings', 'Quadriceps', 'Adductors', 'Abductors'],
    answer: 1
  },
  {
    q: 'The \'latissimus dorsi\' muscle is primarily involved in:',
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
    q: 'Which branch of the nervous system is active during \'rest and digest\'?',
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
    q: 'Which gland is considered the \'master gland\'?',
    options: ['Hypothalamus', 'Pituitary gland', 'Thymus', 'Pancreas'],
    answer: 1
  },
  {
    q: 'Which hormone is produced by the adrenal medulla during stress?',
    options: ['Cortisol', 'Adrenaline (epinephrine)', 'Aldosterone', 'Oestrogen'],
    answer: 1
  },
  {
    q: 'Which hormone regulates the body\'s metabolic rate?',
    options: ['Insulin', 'Thyroxine', 'Glucagon', 'Calcitonin'],
    answer: 1
  },
  {
    q: 'Which hormone is secreted by the parathyroid glands?',
    options: ['Thyroxine', 'Parathyroid hormone (PTH)', 'Cortisol', 'Growth hormone'],
    answer: 1
  },
  {
    q: 'The \'islets of Langerhans\' are found in which organ?',
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
    q: 'What does \'systole\' refer to?',
    options: ['Relaxation of the heart', 'Contraction of the heart', 'Closing of the valves', 'Heart failure'],
    answer: 1
  },
  {
    q: 'Which blood component is responsible for initiating clotting?',
    options: ['Erythrocytes', 'Leukocytes', 'Platelets', 'Haemoglobin'],
    answer: 2
  },
  {
    q: 'What is the name of the \'pacemaker\' of the heart?',
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
  },
  {
    q: 'What is the function of the midbrain?',
    options: ['Transmits messages to and from the spinal cord', 'Transmits messages to and from the spinal cord, the cerebrum and the cerebellum', 'Transmits message to and from the spinal cord and cerebrum', 'Transmits messages to and from the spinal cord and cerebellum'],
    answer: 1
  },
  {
    q: 'The coccygeal plexus is located:',
    options: ['Front of the pelvic cavity', 'Right side of the pelvic cavity', 'Left side of the pelvic cavity', 'Back of the pelvic cavity'],
    answer: 3
  },
  {
    q: 'What is the function of neurilemma?',
    options: ['To speed up the passage of nerve impulses along the fibre', 'Transmit nerve impulses away from the cell body', 'They pass on the nerve impulse to the dendrites of the next neurone', 'To regenerate nerve cells'],
    answer: 3
  },
  {
    q: 'How long is the midbrain?',
    options: ['2cm', '1.5cm', '2.5cm', '1cm'],
    answer: 0
  },
  {
    q: 'Which one of the following is not a function of cerebrospinal fluid?',
    options: ['Forms a cushion between the bony cavities and nerves, protecting the brain and spinal cord', 'Removes waste and toxins', 'Regulates body temperature', 'Keeps pressure around the brain and spinal cord constant'],
    answer: 2
  },
  {
    q: 'The olfactory nerve describes:',
    options: ['Nerve of sight', 'Nerve of smell', 'Nerve of touch', 'Sensory nerve'],
    answer: 1
  },
  {
    q: 'A loss of dopamine occurs when an individual is suffering from:',
    options: ['Multiple sclerosis', 'Parkinson\'s disease', 'Cerebral palsy', 'Myalgic encephalomyelitis'],
    answer: 1
  },
  {
    q: 'The peripheral nervous system contains:',
    options: ['Brain', 'Spinal cord', 'Autonomic nervous system', 'Muscle fibres'],
    answer: 2
  },
  {
    q: 'Dendrites are:',
    options: ['Nerve fibres', 'Nerve cells', 'Nerve impulses', 'Neurones'],
    answer: 0
  },
  {
    q: 'White matter is made of:',
    options: ['Bundles of cell bodies', 'Bundles of mixed fibres and dendrites', 'Bundles of unmyelinated nerve fibres', 'Bundles of myelinated nerve fibres'],
    answer: 3
  },
  {
    q: 'The outer layer of the meninges is called:',
    options: ['Dura mater', 'Cerebrospinal fluid', 'Arachnoid fluid', 'Pia mater'],
    answer: 0
  },
  {
    q: 'Which part of the brain helps with the regulation of metabolism?',
    options: ['Hypothalamus', 'Cerebrum', 'Midbrain', 'Cerebellum'],
    answer: 0
  },
  {
    q: 'The groin is supplied by:',
    options: ['Lumbar plexus', 'Coccygeal plexus', 'Brachial plexus', 'Cervical plexus'],
    answer: 0
  },
  {
    q: 'Which of the following is not an effect of multiple sclerosis?',
    options: ['Muscle weakness', 'Impaired speech', 'Loss of muscle coordination', 'Tremoring'],
    answer: 3
  },
  {
    q: 'Parasympathetic nervous system consists of:',
    options: ['Ganglia', 'Vagus, oculomotor, facial and glossopharyngeal nerves', 'Ganglia, vagus, facial and oculomotor', 'Vagus, oculomotor, ganglia and glossopharyngeal'],
    answer: 1
  },
  {
    q: 'Which part of the brain is the relay station?',
    options: ['The cerebrum', 'The medulla oblongata', 'The midbrain', 'The pons varolii'],
    answer: 2
  },
  {
    q: 'Efferent nerves only transmit to which type of tissue?',
    options: ['Muscular tissue', 'Elastic tissue', 'Muscular and glandular tissue', 'Connective tissue'],
    answer: 2
  },
  {
    q: 'The function of the axon is to:',
    options: ['Transmit nerve impulses away from the cell body', 'Transmit cell bodies away from the nerve impulses', 'Transmit nerve impulses to the cell body', 'Transmit nerve impulses away from the neurone'],
    answer: 0
  },
  {
    q: 'White matter is positioned:',
    options: ['On the inside of the spinal cord', 'On the inside of the brain and outside of the spinal cord', 'On the outside of the brain and inside of the spinal cord', 'On the outside of the brain'],
    answer: 1
  },
  {
    q: 'The central nervous system consists of:',
    options: ['All of the body\'s internal organs', 'Brain', 'Cranial and spinal nerves', 'Brain and spinal cord'],
    answer: 3
  },
  {
    q: 'What is the function of the spinal cord?',
    options: ['Carries motor nerve fibres along its length', 'Carries motor and sensory nerve fibres along its length', 'Transmits messages to the brain', 'Carries motor and sensory nerve fibres along its length, sending messages about feeling and movement to and from the body and brain'],
    answer: 3
  },
  {
    q: 'Where is the sciatic nerve located?',
    options: ['Coccygeal plexus', 'Lumbar plexus', 'Sacral plexus', 'Thoracic plexus'],
    answer: 2
  },
  {
    q: 'Parkinson\'s disease is caused by:',
    options: ['Damage to nerve endings', 'Damage to the myelin sheath', 'Damage to basal ganglia of the brain', 'Damage to the facial nerve'],
    answer: 2
  },
  {
    q: 'Which of the following is not a function of the myelin sheath?',
    options: ['Pass on the nerve impulse to the dendrites', 'Insulates the axon', 'Speeds up nerve conduction', 'Protects the axon from pressure'],
    answer: 0
  },
  {
    q: 'Which part of the brain maintains the balance and equilibrium of the body?',
    options: ['The brain stem', 'The pons varolli', 'The cerebrum', 'The cerebellum'],
    answer: 3
  },
  {
    q: 'How many pairs of spinal nerves does the spinal cord have?',
    options: ['13', '41', '31', '21'],
    answer: 2
  },
  {
    q: 'What is the function of the phrenic nerve?',
    options: ['To send nerve impulses to the diaphragm telling it to contract', 'To send nerve impulses to the lungs telling them to contract', 'To receive nerve impulses', 'To send nerve impulses to and from the brain'],
    answer: 0
  },
  {
    q: 'Ganglia is another term for:',
    options: ['A collection of nerve endings', 'Nerve tissue', 'A collection of nerve cells', 'A collection of reflexes'],
    answer: 2
  },
  {
    q: 'Post viral fatigue is also known as:',
    options: ['Myalgic encephalomelitis', 'Multiple sclerosis', 'Motor neuron disease', 'Neuralgia'],
    answer: 0
  },
  {
    q: 'Cerebrospinal fluid:',
    options: ['Is a clear, colourless fluid formed in special cells', 'Is a yellow fluid situated in the lining of the brain', 'Is a double layer of tough fibrous membrane', 'Is a thin vascular membrane'],
    answer: 0
  },
  {
    q: 'What surrounds the axons?',
    options: ['Grey matter', 'Myelin sheath', 'Synapse', 'Neurilemma'],
    answer: 1
  },
  {
    q: 'Which type of nerves are only present in spinal nerves?',
    options: ['Sensory nerves', 'Motor nerves', 'Efferent nerves', 'Mixed nerves'],
    answer: 3
  },
  {
    q: 'The brain stem is made up of 3 parts:',
    options: ['Hypothalamus, midbrain, medulla oblongata', 'Midbrain, pons varolli, medulla oblongata', 'Hypothalamus, pons varolli, medulla oblongata', 'Midbrain, pons varolli, hypothalamus'],
    answer: 1
  },
  {
    q: 'Which part of the meninges supplies blood to the brain and spinal cord?',
    options: ['Dura mater', 'Outer membrane', 'Pia mater', 'Arachnoid mater'],
    answer: 2
  },
  {
    q: 'The first 4 cervical nerves are contained within:',
    options: ['Brachial plexus', 'Cervical plexus', 'Lumbar plexus', 'Sacral plexus'],
    answer: 1
  },
  {
    q: 'Bells palsy causes:',
    options: ['Facial paralysis', 'Muscular weakness', 'Inflammation of a nerve', 'Loss of muscular coordination'],
    answer: 0
  },
  {
    q: 'Multiple sclerosis is caused by:',
    options: ['Loss of the myelin sheath from nerve tissue in the brain', 'Loss of ganglia from nerve tissue', 'Loss of the myelin sheath from nerve fibres in the central nervous system', 'Damage or injury'],
    answer: 2
  },
  {
    q: 'What covers the axon?',
    options: ['Neurilemma', 'Synapse', 'Myelin sheath', 'Dendrites'],
    answer: 2
  },
  {
    q: 'What is the function of end feet?',
    options: ['They pass on the nerve impulse to the dendrites of the next neurone', 'They fill a gap between one neurone and the next', 'They help regenerate nerve cells', 'They transmit nerve impulses'],
    answer: 0
  },
  {
    q: 'Which part of the brain is known as the small brain?',
    options: ['Hypothalamus', 'Cerebellum', 'Cerebrum', 'Midbrain'],
    answer: 1
  },
  {
    q: 'What is the function of the meninges?',
    options: ['Transports nutrients', 'Removes waste products', 'Protects the central nervous system', 'Keeps pressure around the brain constant'],
    answer: 2
  },
  {
    q: 'The cervical plexus supplies:',
    options: ['Muscles of the neck', 'Muscles from the base of the neck to the fingertips', 'Muscles of the lower limbs', 'Muscles of the neck, shoulder and skin'],
    answer: 3
  },
  {
    q: 'Which one of the following is not a function of the parasympathetic nervous system?',
    options: ['Constricts blood flow to the heart muscles', 'Slows down the action of an organ', 'Restricts the flow of digestive juices', 'Slows the action of the heart'],
    answer: 2
  },
  {
    q: 'A long single nerve fibre is known as:',
    options: ['Synapse', 'Cell body', 'Myelin sheath', 'Axon'],
    answer: 3
  },
  {
    q: 'Which part of the nerve cell speeds up the passage of nerve impulses along the fibre?',
    options: ['Myelin sheath', 'Nodes of ranvier', 'End feet', 'Dendrites'],
    answer: 0
  },
  {
    q: 'Which one of the following is not a function of the cerebellum?',
    options: ['Controls the rate and depth of breathing', 'Maintains balance and equilibrium of the body', 'Controls muscle tone and posture', 'Coordinates muscular activity'],
    answer: 0
  },
  {
    q: 'Which part of the brain is the centre for the emotions?',
    options: ['Medulla oblongata', 'Hypothalamus', 'Midbrain', 'Pons varolii'],
    answer: 1
  },
  {
    q: 'What is the function of the dendrites?',
    options: ['A chemical messenger', 'Insulation', 'Transmits nerve impulses away from the cell body', 'Transmits nerve impulses to the cell body'],
    answer: 3
  },
  {
    q: 'The point where one neurone meets another is called:',
    options: ['Synapse', 'Neurilemma', 'Axon', 'Nodes of ranvier'],
    answer: 0
  },
  {
    q: 'Which of the following is not part of the medulla oblongata?',
    options: ['Cardiac centre', 'Nerve centre', 'Vasomotor centre', 'Reflex centre'],
    answer: 1
  },
  {
    q: 'Which part of the body do the thoracic nerves supply?',
    options: ['Thighs', 'Chest', 'Fingertips', 'Neck'],
    answer: 1
  },
  {
    q: 'Which one of the following is not a function of the sympathetic nervous system?',
    options: ['Slows action of the heart', 'Releases noradrenaline preparing the body for fight or flight', 'Raises blood pressure', 'Relaxes arteries which increases blood supply to the heart muscle'],
    answer: 0
  },
  {
    q: 'What causes sciatica?',
    options: ['Slowness with voluntary movement', 'Damage to the nerve tissue', 'Injury to the nerve cell', 'Degeneration of intervertebral discs'],
    answer: 3
  },
  {
    q: 'Neuritis is described as:',
    options: ['Facial paralysis', 'Post viral fatigue', 'Inflammation of a nerve', 'Damage to the basal ganglia'],
    answer: 2
  },
  {
    q: 'The function of motor nerves is to:',
    options: ['Carry impulses from the brain or spinal cord to the muscles, producing movement', 'Carry impulses from all parts of the body to the brain', 'Carry nerve fibres from the brain or spinal cord to the muscles, producing movement', 'Carry nerve fibres from all parts of the body to the brain'],
    answer: 0
  },
  {
    q: 'Which one of the following is not a function of the hypothalamus?',
    options: ['Regulation of the pituitary gland', 'Regulation of body temperature', 'Secretion of oxytocin', 'Regulation of rate and depth of breathing'],
    answer: 3
  },
  {
    q: 'The autonomic nervous system supplies:',
    options: ['Brain', 'Spinal cord', 'Blood vessels', 'Internal organs and blood vessels'],
    answer: 3
  },
  {
    q: 'A burning or stabbing pain along a nerve is known as:',
    options: ['Parkinson\'s disease', 'Neuralgia', 'Neuritis', 'Motor neurone disease'],
    answer: 1
  },
  {
    q: 'Motor nerves are also known as:',
    options: ['Afferent nerves', 'Grey matter', 'Sensory nerves', 'Efferent nerves'],
    answer: 3
  },
  {
    q: 'Cerebral palsy affects:',
    options: ['Sensory organs', 'Nerve endings', 'Nerve fibres', 'Motor system control'],
    answer: 3
  },
  {
    q: 'The third phase of the menstrual cycle is known as:',
    options: ['Secretory phase', 'Menstrual phase', 'Climacteric phase', 'Proliferative phase'],
    answer: 0
  },
  {
    q: 'What is the function of HGH?',
    options: ['Stimulates production of melanin', 'Regulates height and growth', 'Controls body rhythms', 'Produces milk during lactation'],
    answer: 1
  },
  {
    q: 'Hypersecretion of testosterone in women causes:',
    options: ['Cushing\'s syndrome', 'Amenorrhoea', 'Addisons disease', 'Breast growth'],
    answer: 1
  },
  {
    q: 'Which hormone is produced by the pineal body?',
    options: ['Glucogen', 'Melatonin', 'Adrenaline', 'Parathormone'],
    answer: 1
  },
  {
    q: 'Where are the pituitary glands located?',
    options: ['Base of the brain', 'Either side of the neck', 'Either side of the uterus', 'On top of the kidneys'],
    answer: 0
  },
  {
    q: 'Hyposecretion of thyroxin causes:',
    options: ['Cretinism', 'Amenorrhoea', 'Sweating', 'Fatigue'],
    answer: 0
  },
  {
    q: 'Which of the following is a function of oxytocin?',
    options: ['Ovulation', 'Hair growth', 'Regulates blood sugar levels', 'Contracts muscles of uterus to begin childbirth'],
    answer: 3
  },
  {
    q: 'Where are the ovaries located?',
    options: ['Either side of the uterus', 'Above the uterus', 'Below the uterus', 'Between duodenum and spleen'],
    answer: 0
  },
  {
    q: 'Which one of the following is not contained in the menstrual flow?',
    options: ['The cells lining the uterus', 'The corpus luteum', 'The unfertilised ovum', 'Blood from broken capillaries in the endometrium'],
    answer: 1
  },
  {
    q: 'Insulin is secreted by:',
    options: ['Pancreas', 'Adrenal cortex', 'Pineal body', 'Thyroid glands'],
    answer: 0
  },
  {
    q: 'Which one of the following is not a function of follicle stimulating hormone?',
    options: ['Production of progesterone', 'Stimulates ovaries to produce oestrogen', 'Sperm production in men', 'Ovulation in women'],
    answer: 3
  },
  {
    q: 'Hyposecretion of HGH causes:',
    options: ['Oedema', 'High blood pressure', 'Kidney failure', 'Dwarfism'],
    answer: 3
  },
  {
    q: 'Which hormone is responsible for sexual development?',
    options: ['Testes', 'Ovaries', 'Luteinising hormone', 'Gonadotrophins'],
    answer: 3
  },
  {
    q: 'Hypersecretion of parathormone causes:',
    options: ['Spasms in hands and feet', 'Kidney failure', 'Addison\'s syndrome', 'Softened bones'],
    answer: 3
  },
  {
    q: 'Where is the pancreas located?',
    options: ['Above the stomach', 'Behind and slightly below the stomach', 'Behind the lungs', 'In between the lungs'],
    answer: 1
  },
  {
    q: 'The first phase of the menstrual cycle is known as:',
    options: ['Proliferative phase', 'Secretory phase', 'Menstrual phase', 'Menopause'],
    answer: 2
  },
  {
    q: 'What is the function of melanocyte stimulating hormone?',
    options: ['Stimulates production of melanin', 'Stimulates ovaries to produce the corpus luteum', 'Controls sexual development', 'Regulates salts in the body'],
    answer: 0
  },
  {
    q: 'Where are the parathyroid glands situated?',
    options: ['Either side of the neck', 'On each kidney', 'Base of the brain', 'Behind the thyroid'],
    answer: 3
  },
  {
    q: 'What is the function of mineralocorticoids?',
    options: ['Controls body rhythms', 'Regulates salts in the body', 'Maintains calcium levels in plasma', 'Stimulates production of melanin'],
    answer: 1
  },
  {
    q: 'Hypersecretion of insulin and glucagon causes:',
    options: ['Diabetes mellitus', 'Depression', 'Hypoglycaemia', 'Diabetes insipidus'],
    answer: 2
  },
  {
    q: 'The second phase of the menstrual cycle is known as:',
    options: ['Menarche phase', 'Secretory phase', 'Menstrual phase', 'Proliferative phase'],
    answer: 3
  },
  {
    q: 'What hormone is not produced by the anterior lobe of the pituitary gland?',
    options: ['Thyrotrophin', 'Adrenocorticotrophin', 'Calcitonin', 'Gonadotrophins'],
    answer: 2
  },
  {
    q: 'What is the function of luteinising hormone?',
    options: ['Stimulates ovaries to produce oestrogen', 'Produces milk during lactation', 'Stimulates ovaries to produce the corpus luteum', 'Produce testosterone'],
    answer: 2
  },
  {
    q: 'Where are the thyroid glands located?',
    options: ['Behind the stomach', 'Either side of the neck', 'In the thorax', 'Centre of the brain'],
    answer: 1
  },
  {
    q: 'Hypersecretion of oestrogen in men causes:',
    options: ['Addison\'s disease', 'Hair growth', 'Kidney failure', 'Breast growth'],
    answer: 3
  },
  {
    q: 'A malfunction of melatonin includes:',
    options: ['Fatigue', 'Depression', 'High blood pressure', 'Muscle atrophy'],
    answer: 1
  },
  {
    q: 'The start of menstruation is known as:',
    options: ['Menopause', 'Menarche', 'Proliferative', 'Menstrual cycle'],
    answer: 1
  },
  {
    q: 'Which of the following is a function of interstitial cell stimulating hormone?',
    options: ['Maintains BMR', 'Regulates water absorption in kidneys', 'Secretes testosterone', 'Regulates salts in the body'],
    answer: 2
  },
  {
    q: 'Hypersecretion of ADH causes:',
    options: ['Oedema', 'Graves disease', 'Diabetes insipidus', 'Cretinism'],
    answer: 0
  },
  {
    q: 'Hyposecretion of mineralocorticoids causes:',
    options: ['Addison\'s syndrome', 'Moon shaped face', 'Diabetes insipidus', 'Diabetes mellitus'],
    answer: 0
  },
  {
    q: 'Which one of the following is not an effect of cushing\'s syndrome?',
    options: ['Moon shaped face', 'Low blood pressure', 'Muscle atrophy', 'Mental illness'],
    answer: 1
  },
  {
    q: 'Which hormone is produced by the posterior lobe hormones?',
    options: ['TSH', 'HGH', 'ACTH', 'ADH'],
    answer: 3
  },
  {
    q: 'Which one of the following is a function of the hormones produced by the thyroid glands?',
    options: ['Maintains basic metabolic rate', 'Regulates blood sugar levels', 'Activates vitamin D', 'Regulates salt levels'],
    answer: 0
  },
  {
    q: 'Which glands are situated on top of each kidney?',
    options: ['Thyroid glands', 'Pituitary glands', 'Parathyroids', 'Adrenal glands'],
    answer: 3
  },
  {
    q: 'Which one of the following is not a function of parathormone?',
    options: ['To prepare the body for fight or flight', 'Maintains calcium levels in plasma', 'Activates vitamin D', 'Stimulates calcium reabsorption in kidneys'],
    answer: 0
  },
  {
    q: 'Which hormone is not produced by the adrenal cortex?',
    options: ['Adrenaline', 'Glucocorticoids', 'Mineralocorticoids', 'Sex hormones'],
    answer: 0
  },
  {
    q: 'Hyposecretion of insulin and glucogen causes:',
    options: ['Hypoglycaemia', 'Diabetes insipidus', 'Sweating', 'Diabetes mellitus'],
    answer: 3
  },
  {
    q: 'What is secreted by the thymus?',
    options: ['HGH', 'ACTH', 'TF and THF', 'FSH'],
    answer: 2
  },
  {
    q: 'What is the function of antidiuretic hormone?',
    options: ['Stimulates tissue metabolism', 'Regulates water absorption in kidneys', 'Maintains calcium levels in plasma', 'Activates Vitamin D'],
    answer: 1
  },
  {
    q: 'Which of the following hormones are not produced by the thyroid glands?',
    options: ['Thyroxin', 'Calcitonin', 'Oxytocin', 'Triiodothyronine'],
    answer: 2
  },
  {
    q: 'Which hormone is produced by the parathyroids?',
    options: ['Noradrenaline', 'Mineralocorticoids', 'Parathormone', 'Thyroxin'],
    answer: 2
  },
  {
    q: 'Hyposecretion of parathormone causes:',
    options: ['Cushing\'s syndrome', 'Convulsions', 'Low blood sugar levels', 'Diabetes insipidus'],
    answer: 1
  },
  {
    q: 'Which hormone stimulates the testes to produce testosterone?',
    options: ['Interstitial cell stimulating hormone', 'Follicle stimulating hormone', 'Lactogenic hormone', 'Adrenocorticotrophin'],
    answer: 0
  },
  {
    q: 'Hyposecretion can be defined as:',
    options: ['Over production of a hormone', 'Where 2 or more hormones are produced', 'Where only 1 hormone is secreted', 'Under production of a hormone'],
    answer: 3
  },
  {
    q: 'What is the function of glucocorticoids?',
    options: ['Regulates blood sugar levels', 'Responsible for male sex hormones', 'Metabolises carbohydrates, fats and proteins', 'Maintains basic metabolic rate'],
    answer: 2
  },
  {
    q: 'Which one of the following is a function of adrenaline?',
    options: ['Constricts blood vessels to increase blood pressure', 'Responsible for male sexual characteristics', 'Activates vitamin D', 'Hair growth'],
    answer: 0
  },
  {
    q: 'Menstruation stops in one of the following instances:',
    options: ['Addison\'s syndrome', 'Cushing\'s syndrome', 'Amenorrhoea', 'Polycystic ovarian syndrome'],
    answer: 2
  },
  {
    q: 'The thymus is located:',
    options: ['Centre of the brain', 'In the thorax', 'Either side of the neck', 'Base of the brain'],
    answer: 1
  },
  {
    q: 'What is the function of insulin and glucagon?',
    options: ['Regulates salts in the body', 'Maintains calcium levels in the body', 'Regulates blood sugar levels', 'Regulates water absorption'],
    answer: 2
  },
  {
    q: 'A hormone is a:',
    options: ['Chemical catalyst', 'Chemical reaction', 'Chemical messenger', 'Chemical enzyme'],
    answer: 2
  },
  {
    q: 'Which hormone controls the thyroid gland?',
    options: ['Parathormone', 'Thyrotrophin', 'Luteinising hormone', 'Insulin'],
    answer: 1
  },
  {
    q: 'Hyposecretion of antidiuretic hormone causes:',
    options: ['Addison\'s disease', 'High blood pressure', 'Diabetes insipidus', 'Muscular atrophy'],
    answer: 2
  },
  {
    q: 'What is the function of calcitonin?',
    options: ['Helps glucose enter cells', 'Controls body rhythms', 'Maintains calcium and phosphorus balance', 'Sexual development'],
    answer: 2
  },
  {
    q: 'Hypersecretion of mineralocorticoids causes:',
    options: ['Addison\'s disease', 'Muscle atrophy', 'High blood pressure', 'Cushing\'s syndrome'],
    answer: 2
  },
  {
    q: 'Which hormone does the adrenal medulla secrete?',
    options: ['Glucocorticoids', 'Adrenaline', 'Insulin', 'Testosterone'],
    answer: 1
  },
  {
    q: 'Where is the pineal body located?',
    options: ['In the thorax', 'Either side of the neck', 'Behind the scrotum', 'Centre of the brain'],
    answer: 3
  },
  {
    q: 'Hypersecretion can be defined as:',
    options: ['Too much of a hormone is produced', 'Not enough of a hormone is produced', 'No hormones are produced', 'A balance of hormones are produced'],
    answer: 0
  },
  {
    q: 'Which stage of the menstrual cycle does ovulation occur?',
    options: ['Menstrual cycle', 'Secretory phase', 'Menopause', 'Proliferative phase'],
    answer: 3
  },
  {
    q: 'Which one of the following is a function of melatonin?',
    options: ['Sexual development', 'Stimulates tissue metabolism', 'Maintains BMR', 'Controls body rhythms'],
    answer: 3
  },
  {
    q: 'An endocrine gland:',
    options: ['Is a chemical messenger', 'A ductless gland which produces hormones', 'A hormone', 'A ductless gland'],
    answer: 1
  },
  {
    q: 'Which hormone is responsible for the production of milk during lactation?',
    options: ['Follicle stimulating hormone', 'Lactogenic hormone', 'Human growth hormone', 'Thyroxin'],
    answer: 1
  },
  {
    q: 'Which part of the nervous system does the adrenal medulla support?',
    options: ['Sympathetic nervous system', 'Central nervous system', 'Peripheral nervous system', 'Parasympathetic nervous system'],
    answer: 0
  },
  {
    q: 'What is the function of endoplasmic reticulum?',
    options: ['Forms a system of sacs and canals', 'Growth and repair', 'Destroys worn out parts of a cell', 'Secretes carbohydrates'],
    answer: 0
  },
  {
    q: 'Carbohydrates are combined with protein compounds in:',
    options: ['Ribosomes', 'Mitochondria', 'Golgi apparatus', 'Nucleus'],
    answer: 2
  },
  {
    q: 'The material needed to form chromosomes is called:',
    options: ['Centrosomes', 'Centrioles', 'Centromere', 'Chromatin'],
    answer: 3
  },
  {
    q: 'Which one of the following is a function of the nucleus?',
    options: ['To secrete waste materials supplying the cell with energy', 'To control every organelle within the cytoplasm', 'To form the circulation of a cell', 'Cell reproduction'],
    answer: 3
  },
  {
    q: 'Where can adipose tissue be found?',
    options: ['Back of the eyes', 'Feet', 'Nose', 'Lips'],
    answer: 0
  },
  {
    q: 'Where are goblet cells found?',
    options: ['Simple epithelium', 'Squamous epithelium', 'Compound epithelium', 'Cuboidal epithelium'],
    answer: 0
  },
  {
    q: 'What is the function of the centrioles?',
    options: ['Supply the cell with energy', 'Store waste materials', 'Play a part in mitosis', 'Circulation of oxygen within the cell'],
    answer: 2
  },
  {
    q: 'How is a chromosome formed?',
    options: ['2 strands of centrioles held together by a centrosome', '2 strands of chromatids held together by a centromere', 'Within the nucleolus', 'During the formation of ATP'],
    answer: 1
  },
  {
    q: 'What is the function of vacuoles?',
    options: ['Growth and repair', 'Storage', 'Energy', 'Circulation'],
    answer: 1
  },
  {
    q: 'Lymphoid tissue is a type of:',
    options: ['Muscular tissue', 'Nervous tissue', 'Ciliated tissue', 'Connective tissue'],
    answer: 3
  },
  {
    q: 'Keratinised compound epithelium can be found:',
    options: ['Lining of the oesophagus', 'Hair, skin and nails', 'Inside mouth', 'Lining of the bladder'],
    answer: 1
  },
  {
    q: 'Which type of cartilage is found on articular surfaces of joints?',
    options: ['Hyaline', 'Yellow elastic', 'Elastic', 'White fibrocartilage'],
    answer: 0
  },
  {
    q: 'A group of organs join to form:',
    options: ['Tissue', 'System', 'An organ', 'An organism'],
    answer: 1
  },
  {
    q: 'Which type of tissue is found in organs that need waterproof and expandable lining?',
    options: ['Stratified', 'Transitional', 'Ciliated', 'Simple'],
    answer: 1
  },
  {
    q: 'What is the structure of the cell membrane?',
    options: ['A fine membrane, made of protein threads and lipids', 'A fine membrane, made of fats and carbohydrates', 'A fine membrane, made of water and tissue', 'A fine membrane, made of water and protein'],
    answer: 0
  },
  {
    q: 'During the interphase of mitosis:',
    options: ['A new nuclear membrane appears', 'The cell is resting', 'The nucleolus disappears', 'The nuclear membrane of the nucleus disappears'],
    answer: 1
  },
  {
    q: 'What is the fourth stage of mitosis?',
    options: ['Telophase', 'Interphase', 'Prophase', 'Anaphase'],
    answer: 0
  },
  {
    q: 'What is the function of lysosomes?',
    options: ['Storage', 'Aid digestion', 'Destroy worn out parts of a cell and bacteria', 'Formation of ATP'],
    answer: 2
  },
  {
    q: 'What is the function of white fibrocartilage?',
    options: ['To provide protection', 'To provide flexibility', 'To provide heat', 'To absorb shock'],
    answer: 3
  },
  {
    q: 'Which type of connective tissue is capable of considerable extension and recoil?',
    options: ['Areolar', 'Adipose', 'Yellow elastic', 'White fibrous'],
    answer: 2
  },
  {
    q: 'Where can lymphoid tissue be found?',
    options: ['Lining of the stomach', 'Heart lining', 'The appendix', 'The respiratory system'],
    answer: 2
  },
  {
    q: 'What parts of the body does the appendicular skeleton support?',
    options: ['Shoulder girdle, the upper limbs, the pelvic girdle and lower limbs', 'Torso', 'Head, neck and torso', 'Shoulder girdle and pelvic girdle'],
    answer: 0
  },
  {
    q: 'Which one of the following is an example of a long bone?',
    options: ['Carpals', 'Ribs', 'Ethmoid', 'Phalanges'],
    answer: 3
  },
  {
    q: 'The scapula falls under which category of bone?',
    options: ['Irregular bone', 'Flat bone', 'Short bone', 'Sesamoid bone'],
    answer: 1
  },
  {
    q: 'Which one of the following is not a function of the skeleton?',
    options: ['Protection', 'Support', 'Heat absorption', 'Movement'],
    answer: 2
  },
  {
    q: 'Haversian canals can be defined as:',
    options: ['Passageways which run lengthways', 'Passageways which run lengthways through compact bone', 'Passageways which run lengthways through cancellous bone', 'Passageways found in cancellous bone containing oxygen and nutrients'],
    answer: 1
  },
  {
    q: 'Which bones form the bridge of the nose?',
    options: ['Ethmoid bones', 'Nasal bones', 'Vomer', 'Lacrimal'],
    answer: 1
  },
  {
    q: 'The frontal bone forms:',
    options: ['The cheekbone', 'The lower jaw', 'The upper jaw', 'The forehead'],
    answer: 3
  },
  {
    q: 'The turbinator bone is located on which part of the face?',
    options: ['Cheek', 'Nose', 'Chin', 'Forehead'],
    answer: 1
  },
  {
    q: 'The back of the cranium is made up of which bone?',
    options: ['Occipital', 'Temporal', 'Parietal', 'Lacrimal'],
    answer: 0
  },
  {
    q: 'Where is the foramen magnus located?',
    options: ['Occipital bone', 'Mandible', 'Parietal bone', 'Frontal'],
    answer: 0
  },
  {
    q: 'Which part of the body is the cervical spine positioned?',
    options: ['Lower back', 'Ribs', 'Neck', 'Pelvis'],
    answer: 2
  },
  {
    q: 'How many bones does the lumbar vertebrae contain?',
    options: ['12', '7', '4', '5'],
    answer: 3
  },
  {
    q: 'The shoulder blades are called:',
    options: ['Sternum', 'Clavicle', 'Scapulae', 'Ribs'],
    answer: 2
  },
  {
    q: 'The bone at the top of the arm is called:',
    options: ['Humerus', 'Ulna', 'Radius', 'Carpals'],
    answer: 0
  },
  {
    q: 'The wrist bones are known as:',
    options: ['Phalanges', 'Metacarpals', 'Tarsals', 'Carpals'],
    answer: 3
  },
  {
    q: 'How many phalanges are there in each hand?',
    options: ['12', '14', '8', '10'],
    answer: 1
  },
  {
    q: 'The heel bone is known as:',
    options: ['Cuboid bone', 'Calcaneus bone', 'Navicular bone', 'Cuneiform bone'],
    answer: 1
  },
  {
    q: 'What are joints?',
    options: ['The body\'s hinges', 'The body\'s levers', 'The body\'s postural deformities', 'The body\'s muscles'],
    answer: 0
  },
  {
    q: 'Which of the following is not a cause of postural deformities?',
    options: ['Congenital', 'Diet', 'Environment', 'Traumatic'],
    answer: 1
  },
  {
    q: 'A bone that is broken in one place with no damaged tissue is known as:',
    options: ['An impacted fracture', 'A compound fracture', 'A simple fracture', 'A greenstick fracture'],
    answer: 2
  },
  {
    q: 'Turning a limb to face upwards is known as:',
    options: ['Plantarflexion', 'Pronation', 'Supination', 'Eversion'],
    answer: 2
  },
  {
    q: 'Which muscle helps to bend the neck laterally?',
    options: ['Mentalis', 'Iliopsoas', 'Levator scapulae', 'Masseter'],
    answer: 2
  },
  {
    q: 'What is the position of the flexor carpi radialis?',
    options: ['Posterior forearm', 'Anterior forearm', 'Elbow', 'Top of humerus'],
    answer: 1
  },
  {
    q: 'What is the structure of muscle tissue?',
    options: ['Muscle tissue has spindle shaped cells with a nucleus', 'Muscle tissue is bound in bundles and contained in a sheath', 'Muscle tissue has striated fibres with only 1 nucleus', 'Muscle tissue is made up of several nuclei and is surrounded by a sheath'],
    answer: 1
  },
  {
    q: 'The agonist muscle is:',
    options: ['The relaxing muscle', 'The fixed end of the muscle', 'The moving muscle', 'The thickest part of the muscle'],
    answer: 2
  },
  {
    q: 'Which of the following is not an action of the pectoralis major?',
    options: ['Draws arm backwards', 'Draws arm forwards', 'Draws arm medially', 'Adducts arm'],
    answer: 0
  },
  {
    q: 'Which muscle flexes the hip?',
    options: ['Biceps femoris', 'Vastus lateralis', 'Gastrocnemius', 'Rectus femoris'],
    answer: 3
  },
  {
    q: 'The muscular system relies on the skeletal system for which of the following?',
    options: ['Production of heat', 'Production of nerve impulses', 'Leverage and movement', 'Storage of glycogen'],
    answer: 2
  },
  {
    q: 'Which muscle creates the look of surprise and horror?',
    options: ['Frontalis', 'Risorius', 'Procerus nasi', 'Occipitofrontalis'],
    answer: 1
  },
  {
    q: 'Where are the rhomboids positioned?',
    options: ['Waist', 'Between scapula and spine', 'Top of scapula', 'Scapula'],
    answer: 1
  },
  {
    q: 'Which muscle pushes the mandible out and opens the mouth?',
    options: ['Lateral pterygoid', 'Medial pterygoid', 'Orbicularis oculi', 'Masseter'],
    answer: 0
  },
  {
    q: 'What is the action of the sternocleidomastoid?',
    options: ['Elevates scapula', 'Draws scapula backwards', 'Bends neck laterally', 'Flexes head'],
    answer: 3
  },
  {
    q: 'Which muscle laterally rotates the humerus?',
    options: ['Supraspinatus', 'Teres major', 'Serratus anterior', 'Infraspinatus'],
    answer: 3
  },
  {
    q: 'Voluntary muscle is also known as:',
    options: ['Smooth muscle', 'Cardiac muscle', 'Unstriated muscle', 'Skeletal muscle'],
    answer: 3
  },
  {
    q: 'What is the action of the frontalis?',
    options: ['Raises lower jaw', 'Moves scalp forwards', 'Shows a disgusted expression', 'Moves scalp backwards'],
    answer: 1
  },
  {
    q: 'Where is the iliopsoas positioned?',
    options: ['Deep to the gluteus minimus', 'Underneath the gluteus maximus', 'Crosses the hip joint', 'Underneath the gluteus medius'],
    answer: 2
  },
  {
    q: 'What is the action of the biceps brachii?',
    options: ['Flexes wrist joint', 'Pronates forearm', 'Supinates forearm', 'Flexes fingers'],
    answer: 2
  },
  {
    q: 'Which muscle on the arm crosses the elbow joint?',
    options: ['Flexor carpi ulnaris', 'Brachialis', 'Extensor carpi radialis', 'Triceps'],
    answer: 1
  },
  {
    q: 'A sudden twist or wrench of the joints ligaments is known as:',
    options: ['Sprain', 'Strain', 'Rupture', 'Spasm'],
    answer: 0
  },
  {
    q: 'What is the strongest muscle in the body (by pressure)?',
    options: ['Deltoids', 'Masseter', 'Hamstrings', 'Gluteus maximus'],
    answer: 1
  },
  {
    q: 'The outer layer of the heart wall is called the:',
    options: ['Pericardium', 'Myocardium', 'Sino-atrial', 'Endocardium'],
    answer: 0
  },
  {
    q: 'Where do capillaries arise from?',
    options: ['Arterioles', 'Arteries', 'Venules', 'Veins'],
    answer: 0
  },
  {
    q: 'When you are looking at a diagram of the heart, the upper left chamber is called:',
    options: ['Left ventricle', 'Right atrium', 'Right ventricle', 'Left atrium'],
    answer: 3
  },
  {
    q: 'The function of monocytes is to:',
    options: ['Protect the body from infection', 'Transport oxygen as oxyhaemoglobin', 'Defend the system against micro-organisms', 'Eat bacteria and other micro-organisms'],
    answer: 3
  },
  {
    q: 'What artery supplies the head and neck?',
    options: ['The common carotid', 'Sphenic artery', 'Maxillary artery', 'Jugular artery'],
    answer: 0
  },
  {
    q: 'Hypertension is another term for:',
    options: ['Low blood pressure', 'High blood pressure', 'Heart attack', 'Angina'],
    answer: 1
  },
  {
    q: 'What is the function of leucocytes?',
    options: ['Blood clotting', 'To fight infection', 'To transport waste products', 'Regulate body temperature'],
    answer: 1
  },
  {
    q: 'The four plasma proteins are as follows:',
    options: ['Albumin, globulin, fibrinogen and prothrombin', 'Potassium, globulin, albumin and prothrombin', 'Albumin, potassium, fibrinogen and prothrombin', 'Iodine, prothrombin, fibrinogen and albumin'],
    answer: 0
  },
  {
    q: 'Where are lymphocytes formed?',
    options: ['Red bone marrow', 'Lymphatic tissue', 'Spleen', 'Brain'],
    answer: 1
  },
  {
    q: 'The middle layer of the heart is called:',
    options: ['Myocardium', 'Pericardium', 'Septum', 'Endocardium'],
    answer: 0
  },
  {
    q: 'The heart\'s action is controlled by:',
    options: ['The central nervous system', 'The autonomic nervous system', 'The spinal cord', 'The peripheral nervous system'],
    answer: 1
  },
  {
    q: 'Which layer of the heart is made of cardiac muscle?',
    options: ['Pericardium', 'Septum', 'Myocardium', 'Endocardium'],
    answer: 2
  },
  {
    q: 'Blood returns from the lungs into which heart chamber?',
    options: ['Left atrium', 'Left ventricle', 'Right atrium', 'Right ventricle'],
    answer: 0
  },
  {
    q: 'The blood is pushed from the left atrium into the left ventricle through:',
    options: ['Bicuspid valve', 'Tricuspid valve', 'Mitral valve', 'Septum'],
    answer: 0
  },
  {
    q: 'The pulmonary artery:',
    options: ['Carries deoxygenated blood to the lungs', 'Carries oxygenated blood to the lungs', 'Carry deoxygenated blood from the heart to the body', 'Carry oxygenated blood from the heart to the body'],
    answer: 0
  },
  {
    q: 'The function of capillaries include:',
    options: ['To distribute essential oxygen and nutrients to most parts of the body', 'To carry deoxygenated blood from the capillaries to the larger veins', 'To relax and dilate providing a large blood supply to an active organ', 'To carry oxygenated blood to the larger veins'],
    answer: 0
  },
  {
    q: 'Which one of the following is one of the main arteries of the head and neck?',
    options: ['Right renal artery', 'Hepatic artery', 'Maxillary', 'External carotid'],
    answer: 3
  },
  {
    q: 'A Haemorrhage occurs when:',
    options: ['When a capillary bleeds', 'No blood clot forms', 'When a blood clot is formed', 'When there is high blood pressure'],
    answer: 0
  },
  {
    q: 'Anaemia can be defined as follows:',
    options: ['A reduction in the blood\'s ability to carry oxygen', 'A reduction in white blood cells', 'An increase in the production of erythrocytes', 'The inability of the blood to clot'],
    answer: 0
  },
  {
    q: 'Enlarged veins in the rectum are called:',
    options: ['Haemorrhoids', 'Amenorrhoea', 'Emphysema', 'Rhinitis'],
    answer: 0
  },
  {
    q: 'A cancer of the blood is:',
    options: ['Septicaemia', 'Leukaemia', 'Anaemia', 'Thrombus'],
    answer: 1
  },
  {
    q: 'Hepatitis A, B & C affect which organ of the body?',
    options: ['Spleen', 'Pancreas', 'Heart', 'Liver'],
    answer: 3
  },
  {
    q: 'Which system works with the circulatory system to carry oxygen to every cell and system of the body?',
    options: ['Muscular', 'Skeletal', 'Respiratory', 'Nervous'],
    answer: 2
  },
  {
    q: 'Where are the erythrocytes broken down?',
    options: ['In the pancreas', 'In the kidneys', 'In the lymph', 'In the spleen'],
    answer: 3
  },
  {
    q: 'Which of the following is caused by a decrease in red blood cells?',
    options: ['Anaemia', 'Leukaemia', 'Atherosclerosis', 'Haemorrhoids'],
    answer: 0
  },
  {
    q: 'Pulmonary circulation is the transport of blood:',
    options: ['From the lungs to the heart', 'From the heart to the upper and lower body', 'From the heart to the lungs and back again', 'From the lungs to the heart and back again'],
    answer: 2
  },
  {
    q: 'Another term for a heartbeat is:',
    options: ['Systolic pressure', 'Diastolic pressure', 'Cardiac cycle', 'Pulse'],
    answer: 2
  },
  {
    q: 'What protein gives blood its red colour?',
    options: ['Fibrinogen', 'Haemoglobin', 'Albumin', 'Platelets'],
    answer: 1
  },
  {
    q: '75% of white blood cells are formed by:',
    options: ['Granulocytes', 'Non granular leucocytes', 'Monocytes', 'Lymphocytes'],
    answer: 0
  },
  {
    q: 'Systemic circulation is the transport of blood:',
    options: ['From the heart to the lungs and back again', 'From the lungs to the heart and back again', 'From the heart to the rest of the body and back again', 'From the lungs to the rest of the body and back again'],
    answer: 2
  },
  {
    q: 'Blood reaches the lungs via tiny vessels called:',
    options: ['Capillaries', 'Venules', 'Arteries', 'Arterioles'],
    answer: 0
  },
  {
    q: 'A function of arterioles:',
    options: ['To carry oxygenated blood to the lungs', 'To distribute essential oxygen and nutrients to the body', 'To carry deoxygenated blood from the capillaries to the larger veins', 'To relax and dilate providing a blood supply to active organs'],
    answer: 3
  },
  {
    q: 'Define interstitial fluid:',
    options: ['Fluid which helps to maintain blood pressure', 'Fluid which filters out through the capillary walls and bathes the body\'s tissues', 'Fluid that supplies oxygen and nutrients to most parts of the body', 'Fluid that helps to maintain body temperature'],
    answer: 1
  },
  {
    q: 'Which one of the following is one of the main veins of the head and neck?',
    options: ['Axillary', 'Maxillary', 'Jugular', 'Left iliac vein'],
    answer: 2
  },
  {
    q: 'A sphygmomanometer is used for:',
    options: ['Measure plasma content', 'Measuring body temperature', 'Measuring the level of erythrocytes', 'Measuring blood pressure'],
    answer: 3
  },
  {
    q: 'Which of the following is not required for a clot to form?',
    options: ['Fibrin', 'Vitamin D', 'Calcium', 'Prothrombin'],
    answer: 1
  },
  {
    q: 'What is the rhesus factor?',
    options: ['An antigen found in white blood cells', 'An antigen found in red blood cells of most people', 'An antigen found in white blood cells of all animals', 'An antigen found in red blood cells of most people and animals'],
    answer: 3
  },
  {
    q: 'Which one of the following is not a cause of varicose veins?',
    options: ['Pregnancy', 'Atherosclerosis', 'Obesity', 'Heredity'],
    answer: 1
  },
  {
    q: 'Haemophilia is another term for:',
    options: ['A blood clot in the heart or vessels', 'Blood poisoning', 'Cancer of the blood', 'The blood\'s inability to clot'],
    answer: 3
  },
  {
    q: 'AIDS stands for:',
    options: ['Acquired immune deficiency syndrome', 'Acquired immune disease syndrome', 'Anaemic immune disease syndrome', 'Anaemic immune deficiency syndrome'],
    answer: 0
  },
  {
    q: 'Hepatitis A is spread by:',
    options: ['Infected blood', 'Infected body fluids', 'Faecally contaminated food', 'High cholesterol'],
    answer: 2
  },
  {
    q: 'What is the relationship between the circulatory and skeletal systems?',
    options: ['Erythrocytes and leucocytes are manufactured in the bone marrow of short bones', 'Thrombocytes are manufactured in the bone marrow of short bones', 'Erythrocytes and leucocytes are manufactured in the bone marrow of long bones', 'Erythrocytes are manufactured in sesamoid bones'],
    answer: 2
  },
  {
    q: 'Coronary thrombosis is defined as:',
    options: ['A blood clot in the heart', 'A blood clot in the arteries', 'A blood clot in the veins', 'A blood clot in the coronary artery'],
    answer: 3
  },
  {
    q: 'What is the wall that separates the right and left sides of the heart called?',
    options: ['Pericardium', 'Endocardium', 'Myocardium', 'Septum'],
    answer: 3
  },
  {
    q: 'Deoxygenated blood travels:',
    options: ['From the heart to the lungs in the pulmonary vein', 'From the lungs to the heart in the pulmonary artery', 'From the heart to the lungs in the pulmonary artery', 'From the lungs to the heart in the pulmonary vein'],
    answer: 2
  },
  {
    q: 'Diastolic relates to:',
    options: ['When the heart is contracting', 'When the heart is relaxing', 'When the heart is pumping blood around the body', 'High blood pressure'],
    answer: 1
  },
  {
    q: 'Venules have the following structure:',
    options: ['The walls are one cell thick and porous', 'An endothelial layer made of squamous epithelial tissue', 'They have a thin wall with a large lumen', 'They have a thick wall with a small lumen'],
    answer: 2
  },
  {
    q: 'Which plasma protein changes fibrinogen into fibrin?',
    options: ['Albumin', 'Thrombin', 'Adrenaline', 'Thromboplastin'],
    answer: 1
  },
  {
    q: 'Patients with which blood type can receive any blood group?',
    options: ['Type O', 'Type A', 'Type AB', 'Type B'],
    answer: 2
  },
  {
    q: 'Which one of the following is not a cause of anaemia?',
    options: ['Extensive loss of blood', 'Lack of iron in the diet', 'Lack of vitamin D in the diet', 'Heredity'],
    answer: 2
  },
  {
    q: 'What is the term for blood poisoning?',
    options: ['Thrombus', 'Phlebitis', 'Septicaemia', 'Haemophilia'],
    answer: 2
  },
  {
    q: 'What is the main function of insulin?',
    options: ['Helps the body burn glucose for energy', 'Helps to maintain the correct body temperature', 'Helps the body to burn fat for energy', 'Helps the body to produce erythrocytes'],
    answer: 0
  },
  {
    q: 'Hepatitis B & C are transmitted by:',
    options: ['Poisonous food', 'Infected body fluids except blood', 'Infected red blood cells', 'Infected body fluids including blood'],
    answer: 3
  },
  {
    q: 'The lymphatic system works with the circulatory system by:',
    options: ['Transporting waste products away from the tissues', 'Carrying hormones to various organs', 'Carrying oxygen to every cell and system of the body', 'Transporting oxygen and nutrition to the skin, hair and nails'],
    answer: 0
  },
  {
    q: 'Enzymes are described as:',
    options: ['The chemical catalysts in the body', 'Chemical substances in the body', 'Oxygen and carbon dioxide', 'Chemical messengers in the blood'],
    answer: 0
  },
  {
    q: 'Where are erythrocytes produced?',
    options: ['Nucleus of a cell', 'Red bone marrow', 'Liver', 'Spleen'],
    answer: 1
  },
  {
    q: 'How is the process known as phagocytosis defined?',
    options: ['The process of blood clotting', 'The transport of oxygen', 'The process of eating bacteria and other micro organisms', 'The process of protecting the body against infection'],
    answer: 2
  },
  {
    q: 'Systole relates to:',
    options: ['When the heart is contracting', 'The heartbeat', 'When the heart is relaxing', 'The pulse'],
    answer: 0
  },
  {
    q: 'Deoxygenated blood travels from the upper body into the right atrium via:',
    options: ['Pulmonary veins', 'Superior vena cava', 'Pulmonary artery', 'Inferior vena cava'],
    answer: 1
  },
  {
    q: 'Arteries carry:',
    options: ['Deoxygenated blood to the lungs', 'Oxygenated blood to the lungs', 'Deoxygenated blood from the heart to the body', 'Oxygenated blood from the heart to the body'],
    answer: 3
  },
  {
    q: 'Which one of the following is one of the main veins of the legs?',
    options: ['Right brachial', 'Right cephalic', 'Long saphenous', 'Left anterior tibial'],
    answer: 2
  },
  {
    q: 'Hypotension is another term for:',
    options: ['Low blood pressure', 'High blood pressure', 'Blood clotting', 'Anaemia'],
    answer: 0
  },
  {
    q: 'Leukaemia is caused by:',
    options: ['Over production of white blood cells', 'Over production of red blood cells', 'A decrease in the production of white blood cells', 'A decrease in the production of red blood cells'],
    answer: 0
  },
  {
    q: 'Inflammation of a vein is known as:',
    options: ['Thrombus', 'Haemophilia', 'Phlebitis', 'Atherosclerosis'],
    answer: 2
  },
  {
    q: 'The muscular system works with the circulatory system by:',
    options: ['Carrying oxygen to the lungs', 'Transporting glucose for energy conversion', 'Transporting oxygen and nutrients to skin, hair and nails', 'Removing waste products'],
    answer: 1
  },
  {
    q: 'What are the 2 types of leucocytes?',
    options: ['Monocytes and granulocytes', 'Lymphocytes and monocytes', 'Granulocytes and non granular leucocytes', 'Granulocytes and lymphocytes'],
    answer: 2
  },
  {
    q: 'Blood travels from the right ventricle to the lungs via:',
    options: ['Pulmonary vein', 'Pulmonary artery', 'Aorta', 'Superior vena cava'],
    answer: 1
  },
  {
    q: 'Deoxygenated blood travels from the lower body into the right atrium via:',
    options: ['Pulmonary artery', 'Pulmonary vein', 'Superior vena cava', 'Inferior vena cava'],
    answer: 3
  },
  {
    q: 'The blood is pushed from the right atrium into the right ventricle through:',
    options: ['Bicuspid', 'Tricuspid', 'Septum', 'Mitral'],
    answer: 1
  },
  {
    q: 'The function of venules:',
    options: ['Carry deoxygenated blood to the heart', 'Carry deoxygenated blood from venules to the capillaries', 'Carry deoxygenated blood from arteries to venules', 'Carry deoxygenated blood from capillaries to the larger veins'],
    answer: 3
  },
  {
    q: 'Thrombus is:',
    options: ['Inflammation of a vein', 'A blood clot in the heart or blood vessels', 'Blood poisoning', 'Cancer of the blood'],
    answer: 1
  },
  {
    q: 'The pulmonary vein carries blood:',
    options: ['From the lungs to the heart', 'From the heart to the rest of the body', 'From the heart to the lungs', 'From the heart to the upper body'],
    answer: 0
  },
  {
    q: 'Diabetes effects which organ of the body?',
    options: ['Liver', 'Spleen', 'Pancreas', 'Lungs'],
    answer: 2
  },
  {
    q: 'Veins carry:',
    options: ['Oxygenated blood to the heart', 'Oxygenated blood from the lungs to the heart', 'Deoxygenated blood back to the heart', 'Deoxygenated blood to the lungs'],
    answer: 2
  },
  {
    q: 'Plasma is described as:',
    options: ['A slightly opaque straw coloured fluid', 'A thin opaque straw coloured fluid', 'A slightly thick straw coloured fluid', 'A thick opaque straw coloured fluid'],
    answer: 0
  },
  {
    q: 'Which one of the following is not transmitted by infected body fluids?',
    options: ['Hepatitis B', 'Hepatitis C', 'Hepatitis A', 'Hepatitis D'],
    answer: 2
  },
  {
    q: 'What is haemophilia?',
    options: ['An enlarged vein in the rectum', 'A blood clot', 'The blood\'s inability to clot', 'Inflammation of a vein'],
    answer: 2
  },
  {
    q: 'What is the main artery that supplies blood to the legs?',
    options: ['Tibial', 'Renal', 'Brachial', 'Femoral'],
    answer: 3
  },
];