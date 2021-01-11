# I-E-I: Information of "The Ethics of Information"

Published by Luciano Floridi

## How the nodes are connected?

 How can we explain that two words are related to each other? For an explanation about a word which has a connection with another word, we need a specific standard. So in this project, we have divided every sentences in the book which is “The Ethics of Information” by a specific interval for recognition of word association. This specific interval is called, ‘window’.

 > I love cats.</br>
 Cats are the most adorable creatures in the world.</br>
 But cats mostly don't like me.

 Here are three example sentences. First, it is divided into three sentences according to the period(.). When we consider that there are three windows, in the first sentence, which is `I love cats` has three words is related each other. The second sentence is divided into three words. For instance, `cat is the`, `is the most`, `the most adorable`, `most adorable creatures` e.t.c. As a result, three words in a row in this way are considered to be related to each other.

## What does the size of nodes mean?

 So, are all the words connected with each other eventually? Yes, right. However, it may be different because of the number of times `love` and `cats` are connected, and the number of times `love` and `I` are connected. Therefore, we used a specific process which is ‘textrank’ to calculate the importance and degree of connection for each word using the number of times. The word which appears the most will be the most important and the two words will be more connected if the frequency of occurrence of two specific words together is high. When managing words, the frequency of their appearance is important. Therefore, the more it appears, the larger the node size, and vice versa. Also, the 100 words selected in the graph were also selected from 100 words with high importance according to their frequency of apperance.

## What about the colour of nodes?

 Now we have found a word which is used for nodes, a line for connecting each node, and the size of the nodes. We have drawn enough graphs with these materials, but they are not enough as visual. So, we decided to add 'colour' to make the graph more readable.
 In this project, words are divided into groups (communities) by determining which words are more closely related with others. After this, we assign a colour to each community and assign a specific colour to the node. At this point, the colour tells us which community the word belongs to. The community classification process used the ‘louvain’ algorithm.

## When you click a node

 When we look at the words written on the node at a glance, We don't know in what context and for what reason this word was used. To help with this difficulty, when clicking on a node, a modal window will appear with a few lines of text. This selects the sentence in which the word appears first and shows the sentences before and after.
 Of course, people may not know enough information about words simply by checking that part, but at least we think it will be a help to know " The Ethics of Information ".
