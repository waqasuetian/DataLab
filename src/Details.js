
let Details = [
  {
    id: 1,
    Title: "Crane GPT",
    Description:
      "Introducing CraneGPT, our cutting-edge chatbot designed to revolutionize crane operations. Leveraging the power of Langchain technology and the intelligence of the LAMA-2 language model, CraneGPT becomes your crane expert on demand. It seamlessly interprets crane manuals, providing expert answers to ensure safe and efficient crane operations. Powered by VectorDB for embeddings, CraneGPT offers precision and reliability, enhancing your crane-related queries. Unlock the future of crane management with CraneGPT - your digital partner for superior crane expertise and productivity.",
    Keywords: "Langchain, Large Language Model (LAMA-2), VectorDB",
    Image: "/Pictures/CraneGPT.webp",
    Challenges: [
      "Interpreting various crane manuals with different terminologies and structures",
      "Ensuring the accuracy and reliability of the answers provided.",
      "Implementing a user-friendly interface for seamless interactions",
    ],
    Tools: [
      "Langchain for integrating language model capabilities.",
      "LAMA-2, a Large Language Model, for understanding and generating human-like text.",
      "VectorDB for storing and retrieving vector embeddings efficiently.",
      "ReactJs for front end development.",
    ],
  },
    {
    id: 2,
    Title: "Speaker Verification",
    Description:
      "Introducing CraneGPT, our cutting-edge chatbot designed to revolutionize crane operations. Leveraging the power of Langchain technology and the intelligence of the LAMA-2 language model, CraneGPT becomes your crane expert on demand. It seamlessly interprets crane manuals, providing expert answers to ensure safe and efficient crane operations. Powered by VectorDB for embeddings, CraneGPT offers precision and reliability, enhancing your crane-related queries. Unlock the future of crane management with CraneGPT - your digital partner for superior crane expertise and productivity.",
    Keywords: "Langchain, Large Language Model (LAMA-2), VectorDB",
    Image: "/Pictures/speakerVerification.webp",
    Challenges: [
      "Interpreting various crane manuals with different terminologies and structures",
      "Ensuring the accuracy and reliability of the answers provided.",
      "Implementing a user-friendly interface for seamless interactions",
    ],
    Tools: [
      "Langchain for integrating language model capabilities.",
      "LAMA-2, a Large Language Model, for understanding and generating human-like text.",
      "VectorDB for storing and retrieving vector embeddings efficiently.",
      "ReactJs for front end development.",
    ],
  },
  {
    id: 3,
    Title: "PashtoLexi",
    Description:
      "Our approach to creating a Pashto language thesaurus involved a combination of manual and automated methods. We analyzed Pashto texts manually and compiled lists of synonyms and related words. We also used natural language processing (NLP) techniques to extract and classify words based on their semantic similarity. To train the word2vec model, we used a Pashto corpus and evaluated it on a Pashto journals dataset. Our proposed model outperformed all existing approaches and produced reasonable results.",
    Keywords: "NLTK and spaCy, WordNet",
    Image: "/Pictures/PashtoLexi.png",
    Challenges: [
      "Manual analysis of Pashto texts required extensive labor and time.",
      "Ensuring the accuracy of the synonym lists and related words.",
      "Implementing effective NLP techniques for semantic similarity extraction.",
    ],
    Tools: [
      "NLTK and spaCy for natural language processing tasks.",
      "Train Word2Vec model from scratch for generating the embeddings of pashto text.",
      "Cosine Similarity for accuracy metric.",
      "WordNet for lexical database support.",
    ],
  },
  {
    id: 4,
    Title: "NeuroGensis",
    Description:
      "We have used the Deep Convolutional Generative Adversarial Networks (DCGAN) machine learning algorithm to generate the fake samples. In this research-oriented work, we extracted the salient features of DCGAN and practically demonstrated and implemented it to generate the fake scans of the brain tumors and found it to outperform other types of generative adversarial networks (GANs).",
    Keywords: "PyTorch, Deep Learning, Medical Imaging",
    Image: "/Pictures/NeuroGenis.webp",
    Challenges: [
      "Extracting salient features of DCGAN effectively for generating realistic fake scans.",
      "Ensuring that the generated scans are indistinguishable from real scans for practical applications.",
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
      "We utilized the RASA framework, along with GPT3 integration, to design and develop an interactive chatbot. Our chatbot operates on a client-server model, allowing for real-time response through the RASA framework and ChatGPT. The application has the capability to answer close questions as well as open-ended queries, providing users with a natural and engaging conversational experience. We implemented intent classification through the RASA framework, allowing the chatbot to interactively respond to the user with multiple options to sort out the problem at hand.",
    Keywords: "RASA framework, GPT-3, chatbot",
    Image: "/Pictures/TenantTalker.webp",
    Challenges: [
      "Ensuring real-time responses in the client-server model.",
      "Implementing effective intent classification for interactive responses.",
      "Fine-tuning the GPT3 model for various parameters and problem sets.",
    ],
    Tools: [
      "RASA framework for building the chatbot and implementing intent classification.",
      "GPT-3 for integrating large-scale language model capabilities.",
    ],
  },
  {
    id: 6,
    Title: "PunctuationCorrector",
    Description:
      "We implemented Bidirectional Encoder Representations from Transformer (BERT), a powerful deep learning algorithm. Our approach is similar to that of Grammarly software and is designed to correct punctuation text datasets, which are publicly available. We built a deep feed-forward neural network with 11 dense layers and utilized ReLu activation function and an optimizer AdamW for the output.",
    Keywords: "PyTorch, deep learning, Keras, NLTK, data preprocessing",
    Image: "/Pictures/PunctuationCorrector.png",
    Challenges: [
      "Correcting punctuation in text datasets with high accuracy.",
      "Implementing a deep learning model with a sufficient number of layers for effective learning.",
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
      "We used the famous dataset downloaded from the UCI repository challenge and performed exploratory and classification analysis on the Breast Cancer dataset. We conducted extensive cleaning and data preprocessing tasks using pandas and NumPy and visualized the data using seaborn and Matplotlib. Using the ANN model, we achieved an accuracy of 95%, which was further improved up to 99% using k-fold Cross-validation.",
    Keywords: "PyTorch, deep learning, Keras, data preprocessing",
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
      "The Clinical Decision Support System aids young doctors in diagnosing diseases based on symptoms, especially when common symptoms overlap with multiple conditions. Data sourced from 'Habif’s Clinical Dermatology' by James G. Dinulos is annotated, converted into a CSV format, and preprocessed for compatibility with NLP-based Large Language Models like ClinicalBERT, Bio ClinicalBERT, and PubMedBert. The fine-tuned model is integrated into a Flutter mobile app, allowing doctors to input symptoms and receive predictions for the top five possible diseases along with their probabilities.",
    Keywords: "NLP, ClinicalBERT, PubMedBert, BioClinicalBERT",
    Image: "/Pictures/cdss.mp4",
    Challenges: [
      "Delicate process due to variations in terminology and context.",
      "Manual identification of relevant symptoms for each disease.",
      "Ensuring precision for each specific disease.",
      "Time-consuming but essential.",
      "Critical for creating a reliable dataset.",
    ],
    Tools: [
      "Flutter for Developing the mobile application.",
      "Python for backend development.",
      "Latex for documentation.",
    ],
  },
  {
    id: 9,
    Title:
      "Multi Source Data Fusion for Cost Effective Wheat Crop Yield Prediction",
    Description:
      "The aim of this research-based project is to develop an integrated system for precise and context-aware yield forecasts in Faisalabad, using multi-source data that includes remote sensing, meteorological, and soil data, supporting sustainable agricultural practices and food security.",
    Keywords: "Remote Sensing, Meteorological Data, Soil Data",
    Image: "/Pictures/yeild.mp4",
    Challenges: [
      "Traditional methods for yield prediction rely on ground-truthing techniques.",
      "These techniques can be expensive and time-consuming.",
    ],
    Tools: [
      "MERN Stack for developing the web application.",
      "Python for model development",
      "Jupyter Notebook for data analysis and visualization.",
      "VSC for code development.",
    ],
  },
  {
    id: 10,
    Title:
      "Amazon Product Sentiment Analyzer",
    Description:
      "The task is to perform sentiment analysis on a dataset of Amazon product reviews. The objective is to classify reviews as either positive or negative. The dataset is pre-labeled, and the solution involves preprocessing the reviews, training a model, and deploying\
      it as a web application. The user can input a review sentence, and the model outputs the predicted sentiment.",
    Keywords: "NLP, Trustworthiness, Linguistics",
    Image: "/Pictures/Amazon.jpeg",
    Challenges: [
Here are the challenges in a more concise form:
"Data Preprocessing: Tokenizing, encoding, padding/truncating reviews.",
"Outlier Handling: Removing short or irrelevant reviews.",
"Vocabulary Encoding: Handling out-of-vocabulary words and padding.",
"Model Architecture: Designing a BiLSTM for sentiment classification.",
"Model Deployment: Integrating model inference into Streamlit for real-time sentiment analysis.",
"Loading Pretrained Model: Ensuring correct loading of the model and vocabulary.",
"Visual Feedback: Providing clear sentiment confidence scores and visualizations.",
"These techniques can be expensive and time-consuming.",
    ],
    Tools: [
"PyTorch for building and training a neural network (specifically a BiLSTM) for sentiment classification.",
"Streamlit for building and deploying the web application to allow users to input a review and get a sentiment prediction.",
"Matplotlib & NumPy for visualizing the sentiment analysis result with a custom bar graph showing the confidence level.",
"Pickle used for loading the pre-built vocabulary for encoding the text inputs.",
"Collections (Counter) for constructing the vocabulary based on the frequency of words in the dataset.",
    ],
  },
];

export default Details;
