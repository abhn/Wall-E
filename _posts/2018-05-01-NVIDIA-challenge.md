---
layout: post
title: NVIDIA® Jetson™ Developer Challenge
description: "Merit Award at NVIDIA® Jetson™ Developer Challenge."
tags: [NVIDIA, Deep Neural Networks, Aritifical Intelligence, Computer Vision, Robotics ]
author: Marco
---

Just won Merit Award at the NVIDIA® Jetson™ Developer Challenge with my "Jetson Artificial Hippocampus" for autonomous robots project.

Here is the abstract of the work:

Current state-of-the-art social robots are able to perform very useful high level tasks. Most of these tasks require some sort of knowledge about the environment and the objects in it. Sometimes part of this knowledge is already introduced by a human, while, in other occasions, is the robot the one that has to wander and obtain this information before proceeding with the task. Ideally the later should be the case, as we want to move towards more autonomous robots. However, having the robot retrieve the information every time a task is started can highly impact the time taken to successfully perform it. Another option is, as humans do, to keep track of the information retrieved from previous tasks. This work is an effort to extend the robot’s knowledge of the world by making use of memories from past experiences. For this the Jetson AH (Artificial Hippocampus) agent was developed. In this work a Jetson TX1 is used to deploy and execute an Artificial Hippocampus for the robot, in charge of transforming short term information into long term memories. By having this module running in the background, while the robot performs different tasks, it is able to accumulate knowledge into its long term memory. Later, when a new task comes, it is able to retrieve that information and use it to speed up the whole process. The system has been tested in an apartment like scenario, with a basic fetch, and pick task. Results show that by making use of the long term memories stored in the Jetson AH the robot becomes more efficient with a noticeable speedup on his tasks.

You can download the [documentation here](downloads/NVIDIA_JetsonAH.pdf) and the [presentation here](downloads/NVIDIA_JetsonAH_presentation.pdf).

Here is also a video of the whole implementation:

{% include widgets/youtube_player.html id="KNGLuQHiH7I" %}

