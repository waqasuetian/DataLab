let Details = [
  {
    id: 1,
    Title: "Crane GPT",
    Description:
      "Introducing CraneGPT, our cutting-edge chatbot designed to revolutionize crane operations. Leveraging the power of Langchain technology and the intelligence of the LAMA-2 language model, CraneGPT becomes your crane expert on demand. It seamlessly interprets crane manuals, providing expert answers to ensure safe and efficient crane operations. Powered by VectorDB for embeddings, CraneGPT offers precision and reliability, enhancing your crane-related queries. Unlock the future of crane management with CraneGPT - your digital partner for superior crane expertise and productivity.",
    Keywords: ["Langchain", "Large Language Model (LAMA-2)", "VectorDB"],
    Image: "/Pictures/CraneGPT.webp",
    Challenges: [
      "Interpreting various crane manuals with different terminologies and structures.",
      "Ensuring the accuracy and reliability of the answers provided.",
      "Implementing a user-friendly interface for seamless interactions.",
    ],
    Tools: [
      "Langchain for integrating language model capabilities.",
      "LAMA-2, a Large Language Model, for understanding and generating human-like text.",
      "VectorDB for storing and retrieving vector embeddings efficiently.",
      "ReactJs for front-end development.",
    ],
  },
  {
    id: 2,
    Title: "Speaker Verification",
    Description:
      "Introducing Speaker Verification, our advanced system for speaker identity verification leveraging cutting-edge AI. This system ensures accurate and secure verification of speaker identity in various applications using voice data.",
    Keywords: ["Speaker Verification", "AI", "Voice Recognition"],
    Image: "/Pictures/speakerVerification.webp",
    Challenges: [
      "Dealing with variations in voice patterns across different speakers.",
      "Ensuring real-time verification with high accuracy.",
      "Implementing a secure and reliable identity verification system.",
    ],
    Tools: [
      "Voice processing models for identifying speaker patterns.",
      "Machine Learning algorithms for identity verification.",
      "ReactJs for front-end development.",
    ],
  },
  {
    id: 3,
    Title: "PashtoLexi",
    Description:
      "Our approach to creating a Pashto language thesaurus involved a combination of manual and automated methods. We analyzed Pashto texts manually and compiled lists of synonyms and related words. We also used natural language processing (NLP) techniques to extract and classify words based on their semantic similarity. To train the word2vec model, we used a Pashto corpus and evaluated it on a Pashto journals dataset. Our proposed model outperformed all existing approaches and produced reasonable results.",
    Keywords: ["NLTK", "spaCy", "WordNet"],
    Image: "/Pictures/PashtoLexi.png",
    Challenges: [
      "Manual analysis of Pashto texts required extensive labor and time.",
      "Ensuring the accuracy of the synonym lists and related words.",
      "Implementing effective NLP techniques for semantic similarity extraction.",
    ],
    Tools: [
      "NLTK and spaCy for natural language processing tasks.",
      "Train Word2Vec model for generating Pashto text embeddings.",
      "Cosine Similarity for accuracy metric.",
      "WordNet for lexical database support.",
    ],
  },
  {
    id: 4,
    Title: "NeuroGensis",
    Description:
      "We have used the Deep Convolutional Generative Adversarial Networks (DCGAN) machine learning algorithm to generate fake samples. In this research-oriented work, we extracted salient features of DCGAN and implemented it to generate fake scans of brain tumors, outperforming other types of GANs.",
    Keywords: ["PyTorch", "Deep Learning", "Medical Imaging"],
    Image: "/Pictures/NeuroGenis.webp",
    Challenges: [
      "Extracting salient features of DCGAN for generating realistic fake scans.",
      "Ensuring that the generated scans are indistinguishable from real scans.",
      "Outperforming other GAN models in terms of quality and realism.",
    ],
    Tools: [
      "PyTorch for implementing deep learning models.",
      "Deep Convolutional Generative Adversarial Networks (DCGAN) for generating fake scans.",
    ],
  },
  {
    id: 5,
    Title: "TenantTalker",
    Description:
      "We utilized the RASA framework along with GPT-3 integration to design and develop an interactive chatbot. Our chatbot operates on a client-server model, allowing real-time response through the RASA framework and GPT-3. The chatbot answers close-ended as well as open-ended queries, offering a natural conversational experience.",
    Keywords: ["RASA Framework", "GPT-3", "Chatbot"],
    Image: "/Pictures/TenantTalker.webp",
    Challenges: [
      "Ensuring real-time responses in a client-server model.",
      "Implementing effective intent classification for interactive responses.",
      "Fine-tuning the GPT-3 model for various parameters and problem sets.",
    ],
    Tools: [
      "RASA framework for building the chatbot.",
      "GPT-3 for large-scale language model capabilities.",
    ],
  },
  {
    id: 6,
    Title: "PunctuationCorrector",
    Description:
      "We implemented Bidirectional Encoder Representations from Transformers (BERT), a powerful deep learning algorithm similar to Grammarly software, to correct punctuation in text datasets. We built a deep feed-forward neural network with 11 dense layers, using the ReLu activation function and AdamW optimizer.",
    Keywords: ["BERT", "Deep Learning", "Text Correction"],
    Image: "/Pictures/PunctuationCorrector.png",
    Challenges: [
      "Correcting punctuation in text datasets with high accuracy.",
      "Implementing a deep learning model with sufficient layers for effective learning.",
      "Choosing the right activation function and optimizer for the model.",
    ],
    Tools: [
      "BERT for understanding and generating text.",
      "PyTorch and Keras for implementing deep learning models.",
      "NLTK for natural language processing tasks.",
    ],
  },
  {
    id: 7,
    Title: "Breast Cancer Disease Detection",
    Description:
      "We used a dataset from the UCI repository and performed exploratory and classification analysis on the Breast Cancer dataset. After extensive cleaning and preprocessing, we achieved 95% accuracy using an ANN model, which was further improved to 99% with k-fold Cross-validation.",
    Keywords: ["ANN", "Breast Cancer Detection", "Deep Learning"],
    Image: "/Pictures/BreastCancerDisease.png",
    Challenges: [
      "Cleaning and preprocessing the dataset effectively.",
      "Achieving high accuracy in breast cancer detection.",
      "Implementing k-fold Cross-validation for improved results.",
    ],
    Tools: [
      "ANN model for classification tasks.",
      "Pandas and NumPy for data preprocessing.",
      "Seaborn and Matplotlib for data visualization.",
    ],
  },
  {
    id: 8,
    Title: "Clinical Decision Support System",
    Description:
      "The Clinical Decision Support System aids young doctors in diagnosing diseases based on symptoms. Using a dataset from 'Habif’s Clinical Dermatology,' we trained ClinicalBERT, BioClinicalBERT, and PubMedBERT models, which were integrated into a Flutter mobile app for disease prediction based on symptoms.",
    Keywords: ["ClinicalBERT", "BioClinicalBERT", "NLP"],
    Image: "/Pictures/cdss.mp4",
    Challenges: [
      "Handling variations in terminology and context.",
      "Manual identification of relevant symptoms for each disease.",
      "Ensuring precision in disease prediction.",
    ],
    Tools: [
      "Flutter for developing the mobile application.",
      "Python for backend development.",
      "Latex for documentation.",
    ],
  },
  {
    id: 9,
    Title:
      "Multi Source Data Fusion for Cost-Effective Wheat Crop Yield Prediction",
    Description:
      "This research project focuses on developing an integrated system for precise and context-aware wheat yield forecasts in Faisalabad using multi-source data, including remote sensing, meteorological, and soil data, to support sustainable agriculture and food security.",
    Keywords: ["Remote Sensing", "Meteorological Data", "Soil Data"],
    Image: "/Pictures/yield.mp4",
    Challenges: [
      "Traditional yield prediction methods are expensive and time-consuming.",
      "Integrating multiple data sources for accurate yield prediction.",
    ],
    Tools: [
      "MERN Stack for developing the web application.",
      "Python for model development.",
      "Jupyter Notebook for data analysis and visualization.",
    ],
  },
  {
    id: 10,
    Title: "Amazon Product Sentiment Analyzer",
    Description:
      "This project involves performing sentiment analysis on a dataset of Amazon product reviews. The solution includes preprocessing reviews, training a model, and deploying it as a web application. Users can input review sentences, and the model outputs the predicted sentiment.",
    Keywords: ["Sentiment Analysis", "BiLSTM", "Streamlit"],
    Image: "/Pictures/Amazon.jpeg",
    Challenges: [
      "Preprocessing reviews for sentiment classification.",
      "Handling out-of-vocabulary words and padding.",
      "Designing a BiLSTM model for sentiment classification.",
      "Deploying the model in a user-friendly web application.",
    ],
    Tools: [
      "PyTorch for building and training the BiLSTM model.",
      "Streamlit for deploying the web application.",
      "Matplotlib and NumPy for visualizing sentiment results.",
      "Pickle for loading pre-built vocabulary for encoding text inputs.",
    ],
  },
];

export default Details;
