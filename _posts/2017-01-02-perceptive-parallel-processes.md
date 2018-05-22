---
layout: post
title: Perceptive Parallel Processes Coordinating Geometry and Texture
description: "Perceptive Parallel Processes Coordinating Geometry and Texture."
tags: [robotics computervision images]
author: Marco
---


Finding and classifying specific objects is a key part in most of the tasks autonomous systems could face. Properly  being  able  to  reach  objects  and  find  their  exact location is very important for successfully achieving higher level robotic behaviors. To perform full object detection and recognition tasks in a wide environment several perception approaches need to be brought together to achieve a good performance. In this paper we present a dual parallel system for object finding in wide environments. Our system implements two main parts. One texture based approach for wide scenes, composed by a Multimodal Deep Learning Neural Network and a syntactic distribution based parser. And another specific geometry based process, using three dimensional data and geometry  constrains  to  look  for  specific  objects  and  their position within a whole scene. Both systems run in parallel and compliment each other to fulfill an object search and locate task. The major contribution of this paper consists on the success of combining texture and geometry based solutions running in parallel and sharing information in real time to allow a full generic solution to be able to find almost any present object in a wide environment. To validate our system we test it with real environment data injected into a simulated environment. We test 25 tasks in a household environment obtaining a 92% overall success rate finally delivering the correct position of the object.

You can find the paper in the [publications section](/publications.html).

Here is the video that epxlains the whole process in a more visual way:

{% include widgets/youtube_player.html id="Zfg9wzGcg0k" %}
