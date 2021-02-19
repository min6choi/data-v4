# I-E-I: Information of "The Ethics of Information"

Published by Luciano Floridi

## How the nodes are connected?

 How can we explain that two words are related to each other? For an explanation about a word which has a connection with another word, we need a specific standard. So in this project, we have divided every sentences in the book which is “The Ethics of Information” by a specific interval for recognition of word association. This specific interval is called, **‘Window’**. And we decided to call the circle shape created based on the divided words as **'Node'** .

 > I love cats.</br>
 Cats are the most adorable creatures in the world.</br>
 But cats mostly don't like me.

 Here are three example sentences. First, it is divided into three sentences according to the period(.). When we consider that there are three windows, in the first sentence, which is `I love cats` has three words is related each other. The second sentence is divided into three words. For instance, `cat is the`, `is the most`, `the most adorable`, `most adorable creatures` e.t.c. As a result, three words in a row in this way are considered to be related to each other.

## What does the size of nodes mean?

 So, are all the words connected with each other eventually? Yes, right. However, it may be different because of the number of times `love` and `cats` are connected, and the number of times `love` and `I` are connected. Therefore, we used a specific process which is  **‘textrank’**  to calculate the importance and degree of connection for each word using the number of times. The word which appears the most will be the most important and the two words will be more connected if the frequency of occurrence of two specific words together is high. When managing words, the frequency of their appearance is important. Therefore, the more it appears, the larger the node size, and vice versa. Also, the 100 words selected in the graph were also selected from 100 words with high importance according to their frequency of apperance.

## What does the color and position of the node mean?

Now we have found a word which is used for nodes, a line for connecting each node, and the size of the nodes. We drew enough graphs with these materials, but we wanted more effective and useful visual information. So we decided to add **colour** to make the graph more understandable. At this point, the colour tells which community the word belongs to. In this project, we used **Louvain algorithms** to print out which word were more 'close' to other word and as a result we divided the words into several communities. In addition, the classification by this community placed each word closer to the center of the mindmap, which corresponds to the important word in the text book. For this work, we used the textrank score.

## The information that when you click a node

 When we look at the words written on the node at a glance, We don't know in what context and for what reason this word was used. To help with this difficulty, when clicking on a node, a modal window will appear with a few lines of text. This selects the sentence in which the word appears first and shows the sentences before and after.
 Of course, people may not know enough information about words simply by checking that part, but at least we think it will be a help to know "The Ethics of Information".

* * *

## Kor ver

## 노드는 어떤 방식으로 연결되었는가?

단어와 단어는 어떻게 관련되었다고 할 수 있을까요? 한 단어가 다른 단어와 '연결'되었다고 말할 수 있으려면, 특정한 기준이 필요합니다. 그렇기 때문에 이 프로젝트에서는 “정보 윤리학” 책의 모든 문장을 문장(!,? .) 별로 나누고, 각 문장 내에서도 특정한 간격만큼 나누어 단어의 관련도를 파악해 보았습니다. 이 특정한 간격을  **‘Window(윈도우)’** 로 부르고 나누어진 단어를 기준으로 만들어진 원 형태를 **'Node(노드)'** 로 부르기로 결정 했습니다.

> I love cats.</br>
Cats are the most adorable creatures in the world.</br>
But cats mostly don't like me.

위와 같은 세개의 예시 문장이 있습니다. 먼저 온점(.) 에 따라 세 개의 문장으로 나뉩니다. window 가 3개일 경우를 생각해보겠습니다. 첫 번째 문장 `I love cat` 에서 단어 `I`,`love`, `cat` 는 서로 연관이 있는 단어들입니다. 한편 두 번째 문장에서는 3 단어씩 나뉘게 됩니다. `Cat is the` / `is the most` / `the most adorable` / `most adorable creature` 등등 이런 식으로 연속으로 나온 3개의 단어를 이 프로젝트에서는 서로 관련이 있는 것으로 여깁니다.

## 노드의 크기는 어떤 의미인가?

그렇다면 궁극적으로는 모든 단어가 연결되는 것일까요? 네 맞습니다. 하지만 단어 `love`와 `cat` 이 연결되는 횟수와 `love`와 `I`가 연결되는 횟수는 다를 것입니다. 우리는 이 횟수를 가지고  **‘textrank’**  라는 기법을 사용해 각 단어의 중요도와, 연결 정도를 계산 했습니다. 계산에 따르면 가장 많이 출현된 단어가 가장 중요할 것이고, 특정 두 단어가 함께 출현한 빈도가 높다면 두 단어는 연결되었다고 할 것입니다.
단어를 다룰 때 출현 빈도가 중요하기 때문에, 더 많이 출현할 수록 노드의 사이즈는 클 것이고, 더 적게 출현할 수록 노드의 사이즈는 작아집니다. 또한, 그래프에 선정된 100개의 단어 역시 출현 빈도에 따른 중요도가 높은 100개의 단어를 추린 것입니다.

## 노드의 색과 위치는 어떤 의미를 가지고 있는가?

우리는 이제 노드로 쓸 단어, 노드 사이를 연결하는 선, 그리고 노드의 크기를 찾아냈습니다. 이 재료들로 그래프를 충분히 그릴 수 있지만, 우리는 보다 효과적이고 유용한 시각적 정보를 담고자 했습니다. 그래서 노드에  **색깔** 을 추가해 이해도를 좀 더 높히고자 하였습니다. 이때 색은 단어가 어떤 커뮤니티에 속하는지를 알려줍니다. 이 프로젝트에서는 **Louvain알고리즘**을 사용해  각 단어가 어떤 단어와 더 '근접'한지 출력하여 단어들을 몇 개의 그룹(커뮤니티)으로 나누었습니다. 또한 이 커뮤니티에 의한 분류를 통해 각 단어들이 마인드맵 중심과 가까울 수록 책에 중요한 단어에 해당하게 배치했습니다. 이를 구현 할 때 커뮤니티별 textrank점수를 사용해 높은 점수를 받을 수록 중심과 가까운 곳에 배치되도록 만들었습니다.

## 노드를 클릭 했을 때 얻게 되는 정보

노드에 적힌 단어만 보고는 이 단어가 어떤 맥락으로 쓰였는지 알 수가 없습니다. 따라서 단어의 출처에 대한 정보를 주기 위해, 노드를 클릭하면 몇 줄의 글이 적힌 모달창이 뜨게 설계했습니다. 모달 창의 문장은 책에서 그 단어가 가장 먼저 나온 문장과 그 문장의 앞뒤 문장을 보여줍니다.
물론 단순히 그 부분만 확인해서는 단어에 대한 정보를 충분히 알지는 못하겠지만, 적어도 “The Ethics of Information” 을 접하는 데에 도움이 될 것이라 생각합니다.

## 마인드 맵의 구성 방식을 선택한 이유

 단어의 관련도를 알기 위해 **window**로 단어간의 연결 선을 파악하다보니, 결과적으로 모든 단어가 연결되었습니다. 따라서 우리는 책에 있는 단어의 중요도를 보다 직접적으로 나타내기 위해 노드의 색을 나타내기 위해 사용했던 community를 기준으로 같은 커뮤니티끼리 묶이는 마인드맵 형식으로 데이터를 표현했습니다. 각 단어들은 마인드맵의 중심과 가까울 수록 중요한 단어이며, 가장 끝 쪽에 있을수록 덜 중요한 단어입니다. 이를 구현할 때 전체 텍스트의 textrank점수가 아니라 **community별 textrank점수**를 사용해, 높은 점수를 받을 수록 중심과 가까운 곳에 배치되도록 했습니다.
