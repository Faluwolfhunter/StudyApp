// Import React library and the useState hook for managing state in functional components
import React, { useState } from "react";
// Import custom CSS file to style the components
import "./styles.css";

// Define a Flashcard component that takes in question, answer, and an onDelete function as props
function Flashcard({ question, answer, onDelete }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flashcard ${isFlipped ? "flipped" : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        padding: "35px",
        textAlign: "center",
        position: "relative",
        minHeight: "150px",
      }}
    >
      <div>{isFlipped ? answer : question}</div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        style={{
          position: "absolute",
          top: "10px", // Position at the top-left corner
          left: "10px", // Position at the left-hand corner
          cursor: "pointer",
          padding: "5px 10px",
          backgroundColor: "#f44336", // Red background for delete button
          color: "white", // White text color
          border: "none", // No border
          borderRadius: "5px", // Rounded corners
        }}
      >
        Delete
      </button>
    </div>
  );
}

// Spreadsheet Component
function Spreadsheet() {
  const [data, setData] = useState([
    {
      disease: "",
      etiology: "",
      clinicalManifestations: "",
      assessment: "",
      diagnosticTests: "",
      medicalManagement: "",
      nursingInterventions: "",
      prognosis: "",
    },
  ]);

  const handleChange = (rowIndex, field, value) => {
    const newData = [...data];
    newData[rowIndex][field] = value;
    setData(newData);
  };

  const addRow = () => {
    setData([
      ...data,
      {
        disease: "",
        etiology: "",
        clinicalManifestations: "",
        assessment: "",
        diagnosticTests: "",
        medicalManagement: "",
        nursingInterventions: "",
        prognosis: "",
      },
    ]);
  };

  // Function to handle Tab key for indentation
  const handleKeyDown = (e, rowIndex, field) => {
    if (e.key === "Tab") {
      e.preventDefault(); // Prevent default tab behavior
      const newData = [...data];
      newData[rowIndex][field] += "    "; // Add spaces for indentation (4 spaces)
      setData(newData);
    }
  };

  return (
    <div className="spreadsheet">
      <table>
        <thead>
          <tr>
            <th>Disease</th>
            <th>Etiology/Pathology</th>
            <th>Clinical Manifestations</th>
            <th>Assessment</th>
            <th>Diagnostic Tests</th>
            <th>Medical Management</th>
            <th>Nursing Interventions</th>
            <th>Prognosis</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <textarea
                  value={row.disease}
                  onChange={(e) =>
                    handleChange(rowIndex, "disease", e.target.value)
                  }
                  onKeyDown={(e) => handleKeyDown(e, rowIndex, "disease")}
                  rows={1}
                />
              </td>
              <td>
                <textarea
                  value={row.etiology}
                  onChange={(e) =>
                    handleChange(rowIndex, "etiology", e.target.value)
                  }
                  onKeyDown={(e) => handleKeyDown(e, rowIndex, "etiology")}
                  rows={1}
                />
              </td>
              <td>
                <textarea
                  value={row.clinicalManifestations}
                  onChange={(e) =>
                    handleChange(
                      rowIndex,
                      "clinicalManifestations",
                      e.target.value
                    )
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, rowIndex, "clinicalManifestations")
                  }
                  rows={1}
                />
              </td>
              <td>
                <textarea
                  value={row.assessment}
                  onChange={(e) =>
                    handleChange(rowIndex, "assessment", e.target.value)
                  }
                  onKeyDown={(e) => handleKeyDown(e, rowIndex, "assessment")}
                  rows={1}
                />
              </td>
              <td>
                <textarea
                  value={row.diagnosticTests}
                  onChange={(e) =>
                    handleChange(rowIndex, "diagnosticTests", e.target.value)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, rowIndex, "diagnosticTests")
                  }
                  rows={1}
                />
              </td>
              <td>
                <textarea
                  value={row.medicalManagement}
                  onChange={(e) =>
                    handleChange(rowIndex, "medicalManagement", e.target.value)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, rowIndex, "medicalManagement")
                  }
                  rows={1}
                />
              </td>
              <td>
                <textarea
                  value={row.nursingInterventions}
                  onChange={(e) =>
                    handleChange(
                      rowIndex,
                      "nursingInterventions",
                      e.target.value
                    )
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, rowIndex, "nursingInterventions")
                  }
                  rows={1}
                />
              </td>
              <td>
                <textarea
                  value={row.prognosis}
                  onChange={(e) =>
                    handleChange(rowIndex, "prognosis", e.target.value)
                  }
                  onKeyDown={(e) => handleKeyDown(e, rowIndex, "prognosis")}
                  rows={1}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={addRow}
        className="add-row-button"
        style={{ marginTop: "10px" }}
      >
        Add Row
      </button>
    </div>
  );
}

// Main App component that manages the flashcards and input form
function App() {
  const [flashcards, setFlashcards] = useState([
    {
      question: "What is the primary function of the stomach?",
      answer:
        "The stomach's primary function is to digest food and mix it with gastric juices to form chyme.",
    },
    {
      question: "What is the normal pH range of gastric juice?",
      answer: "The normal pH range of gastric juice is between 1.5 and 3.5.",
    },
    {
      question: "What is the role of the liver in digestion?",
      answer:
        "The liver produces bile, which is important for the emulsification and digestion of fats.",
    },
    {
      question: "What condition is characterized by inflammation of the liver?",
      answer: "Hepatitis is characterized by inflammation of the liver.",
    },
    {
      question: "What is a common symptom of gallbladder disease?",
      answer:
        "A common symptom of gallbladder disease is pain in the right upper quadrant, often after eating fatty foods.",
    },
    {
      question:
        "Which enzyme is responsible for the breakdown of carbohydrates in the mouth?",
      answer:
        "Salivary amylase is responsible for the breakdown of carbohydrates in the mouth.",
    },
    {
      question: "What is the most common cause of peptic ulcers?",
      answer:
        "The most common cause of peptic ulcers is infection with Helicobacter pylori.",
    },
    {
      question: "What are the signs of gastrointestinal bleeding?",
      answer:
        "Signs of gastrointestinal bleeding include hematemesis (vomiting blood), melena (black tarry stools), and abdominal pain.",
    },
    {
      question:
        "What dietary modifications are recommended for patients with gastroesophageal reflux disease (GERD)?",
      answer:
        "Patients with GERD should avoid spicy foods, caffeine, chocolate, and large meals, and should eat smaller, more frequent meals.",
    },
    {
      question: "What is the purpose of a colonoscopy?",
      answer:
        "The purpose of a colonoscopy is to visually inspect the colon for abnormalities, including polyps, tumors, and inflammation.",
    },
    {
      question:
        "What is a common complication of chronic alcoholism on the gastrointestinal system?",
      answer: "Common complications include pancreatitis and liver cirrhosis.",
    },
    {
      question:
        "What is the primary risk factor for developing diverticulitis?",
      answer:
        "A diet low in fiber is the primary risk factor for developing diverticulitis.",
    },
    {
      question: "What are the classic symptoms of appendicitis?",
      answer:
        "Classic symptoms of appendicitis include right lower quadrant pain, fever, and nausea.",
    },
    {
      question:
        "What condition is characterized by the presence of gallstones in the gallbladder?",
      answer:
        "Cholelithiasis is characterized by the presence of gallstones in the gallbladder.",
    },
    {
      question: "What is the main symptom of irritable bowel syndrome (IBS)?",
      answer:
        "The main symptom of IBS is recurrent abdominal pain associated with changes in bowel habits.",
    },
    {
      question:
        "Which vitamin deficiency is most commonly associated with malabsorption syndromes?",
      answer:
        "Vitamin B12 deficiency is commonly associated with malabsorption syndromes.",
    },
    {
      question:
        "What is the most effective way to prevent hepatitis A infection?",
      answer:
        "The most effective way to prevent hepatitis A is through vaccination and practicing good hygiene, including proper handwashing.",
    },
    {
      question: "What is the primary symptom of celiac disease?",
      answer:
        "The primary symptom of celiac disease is diarrhea, often accompanied by weight loss and malnutrition.",
    },
    {
      question: "What is the significance of stool guaiac testing?",
      answer:
        "Stool guaiac testing is significant for detecting occult blood in the stool, which may indicate gastrointestinal bleeding.",
    },
    {
      question:
        "What is the common treatment for gastroesophageal reflux disease (GERD)?",
      answer:
        "Common treatments for GERD include lifestyle modifications, antacids, and proton pump inhibitors.",
    },
  ]);

  const [newCard, setNewCard] = useState({ question: "", answer: "" });

  const handleAddCard = (e) => {
    e.preventDefault(); // Prevents form submission from reloading the page
    setFlashcards([...flashcards, newCard]); // Add the new card to the list of flashcards
    setNewCard({ question: "", answer: "" }); // Reset the input fields to empty strings
  };

  // Define the handleDeleteCard function
  const handleDeleteCard = (index) => {
    const updatedFlashcards = flashcards.filter((_, i) => i !== index); // Remove card at the specified index
    setFlashcards(updatedFlashcards); // Update state with the new flashcards array
  };

  // Function to auto-resize textareas
  const handleTextareaChange = (e) => {
    e.target.style.height = "auto"; // Reset the height
    e.target.style.height = `${e.target.scrollHeight}px`; // Set the new height
  };

  return (
    <div className="flashcard-container">
      <h1>STUDY TIME!</h1> {/* Header message */}
      <h1>You got this Judy!</h1> {/* Encouraging message */}
      {/* Important Dates Section */}
      <div className="important-dates">
        <h2>Important Dates:</h2>
        <p>1. Module 8 Quiz - Date: 11/18</p>
        <p>2. Module 9 Quiz - Date: 11/22</p>
      </div>
      {/* List of flashcards */}
      <div className="flashcard-list">
        {flashcards.map((card, index) => (
          <Flashcard
            key={index}
            question={card.question}
            answer={card.answer}
            onDelete={() => handleDeleteCard(index)} // Pass the delete function to Flashcard
          />
        ))}
      </div>
      {/* Form for adding a new flashcard */}
      <form onSubmit={handleAddCard} className="add-card-form">
        {/* Textarea for question */}
        <textarea
          placeholder="Question"
          value={newCard.question}
          onChange={(e) => {
            setNewCard({ ...newCard, question: e.target.value });
            handleTextareaChange(e); // Resize on change
          }}
          style={{ fontSize: "19px", width: "100%", marginBottom: "15px" }} // Styling for textarea
          rows={1} // Initial number of rows
        />
        {/* Textarea for answer */}
        <textarea
          placeholder="Answer"
          value={newCard.answer}
          onChange={(e) => {
            setNewCard({ ...newCard, answer: e.target.value });
            handleTextareaChange(e); // Resize on change
          }}
          style={{ fontSize: "19px", width: "100%", marginBottom: "15px" }} // Styling for textarea
          rows={1} // Initial number of rows
        />
        {/* Button to submit the form and add flashcard */}
        <button
          type="submit"
          className="add-flashcard-button" // Use the new CSS class
        >
          Add Flashcard
        </button>
      </form>
      {/* Spreadsheet Section */}
      <h2>Disease Spreadsheet</h2>
      <Spreadsheet />
    </div>
  );
}

export default App; // Export App component for rendering in the main application
