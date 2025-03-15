---
title: "Post Twenty Four"
slug: "post-twenty-four"
description: This is the twenty-fourth post about Machine Learning
date: "2020-12-15"
highlight: false
tags: ["machine-learning", "ai"]
cover: https://picsum.photos/seed/post-24/400/200
---

## Intro to Machine Learning

Content of the _twenty-fourth post_ about ML concepts.

### JavaScript Example

```javascript
console.log("Hello, Machine Learning!");
```

### Python Example

```python showLineNumbers
# Simple classification example with scikit-learn
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load the iris dataset
iris = datasets.load_iris()
X, y = iris.data, iris.target

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Train a model
clf = RandomForestClassifier(n_estimators=100)
clf.fit(X_train, y_train)

# Make predictions
predictions = clf.predict(X_test)

# Calculate accuracy
print(f"Model accuracy: {accuracy_score(y_test, predictions):.2f}")
```

### R Example

```r
# Basic machine learning in R with caret package
library(caret)
library(randomForest)

# Load built-in dataset
data(iris)

# Create training and test sets
set.seed(123)
inTraining <- createDataPartition(iris$Species, p = .7, list = FALSE)
training <- iris[inTraining,]
testing <- iris[-inTraining,]

# Train model
model <- randomForest(Species ~ ., data=training)

# Make predictions
predictions <- predict(model, testing)

# Check accuracy
confusionMatrix(predictions, testing$Species)
```

### Java Example

```java
// Using Weka for ML in Java
import weka.classifiers.trees.J48;
import weka.core.Instances;
import weka.core.converters.ConverterUtils.DataSource;

public class SimpleMLExample {
    public static void main(String[] args) throws Exception {
        // Load dataset
        DataSource source = new DataSource("iris.arff");
        Instances data = source.getDataSet();
        if (data.classIndex() == -1) {
            data.setClassIndex(data.numAttributes() - 1);
        }

        // Create decision tree model
        J48 tree = new J48();
        tree.buildClassifier(data);

        // Print the model
        System.out.println(tree.toString());
    }
}
```
