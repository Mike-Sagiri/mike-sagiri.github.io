---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>
<div lang="en" markdown="1">
I am a graduate student at [SIST (School of Intelligence Science and Technology)](https://sai.pku.edu.cn), [Peking University](https://pku.edu.cn), supervised by [Prof. Huijing Zhao](http://poss.pku.edu.cn).

My research interests include robotics, embodied AI, and multimodal learning, with a particular focus on autonomous driving in unstructured environments. I am also passionate about open-source knowledge sharing, including ROS2 development with WSL2 & Docker, SSH GUI workflows (X11 & Wayland), and modern C++.

Personally, I enjoy billiards, curling, CrossFire, and Paradox games such as EU4 and CK3 :)
</div>

<div lang="zh" markdown="1">
我目前是[北京大学](https://pku.edu.cn)[智能科学与技术学院（SIST）](https://sai.pku.edu.cn)的研究生，师从[赵卉菁教授](http://poss.pku.edu.cn)。

我的研究兴趣涵盖机器人学、具身智能与多模态学习，尤其关注非结构化环境下的自主驾驶。同时，我热爱开源知识分享，内容包括基于 WSL2 与 Docker 的 ROS2 开发、带图形界面的 SSH 技巧（X11 与 Wayland）以及现代 C++。

在生活方面，我喜欢台球、冰壶、穿越火线以及 Paradox 出品的策略游戏（EU4、CK3 等）。
</div>

<h1 id="news">
  <span lang="en">🔥 News</span>
  <span lang="zh">🔥 新闻</span>
</h1>

<div lang="en" markdown="1">
- *2025.09*: &nbsp; Our paper **LagMemo: Language 3D Gaussian Splatting Memory for Multi-modal Open-vocabulary Multi-goal Visual Navigation** is under review at ICRA 2026.
- *2025.07*: &nbsp; 🎉🎉 Graduated from [EECS (School of Electronics Engineering and Computer Science)](https://eecs.pku.edu.cn/) as an Outstanding Student of Beijing and Peking University. Check my interview on the [official WeChat post](https://mp.weixin.qq.com/s/kEiWE6XRCrdcjhlvTSvj5w).
- *2025.06*: &nbsp; 🎉🎉 Our paper **TerraFusion: Semi-Supervised Vision-Proprioception Fusion for Robust Terrain Classification** was accepted by RAL.
- *2024.03*: &nbsp; Our work on [OOD challenges in terrain classification](https://github.com/weekgoodday/TCPOSS) is under review at IROS 2024. Paper: [Can Confidence Quantification Methods Work When Facing Real-world OOD Data in Terrain Classification?](https://weekgoodday.github.io/files/IROS2024_Terrain_Classification.pdf)
- *2023.02 - 2023.11*: &nbsp; 🎉🎉 Participated in [iGEM 2023](https://competition.igem.org/) as part of [Team Peking](http://2023.igem.wiki/peking) and won a **Gold Medal**.
</div>

<div lang="zh" markdown="1">
- *2025.09*: &nbsp; 我们的论文 **LagMemo: Language 3D Gaussian Splatting Memory for Multi-modal Open-vocabulary Multi-goal Visual Navigation** 正在接受 ICRA 2026 会议评审。
- *2025.07*: &nbsp; 🎉🎉 毕业于[北京大学电子工程与计算机科学学院（EECS）](https://eecs.pku.edu.cn/)，获评北京市及北京大学优秀毕业生。学校的采访文章可见[官方微信推文](https://mp.weixin.qq.com/s/kEiWE6XRCrdcjhlvTSvj5w)。
- *2025.06*: &nbsp; 🎉🎉 我们的论文 **TerraFusion: Semi-Supervised Vision-Proprioception Fusion for Robust Terrain Classification** 被 RAL 正式录用。
- *2024.03*: &nbsp; 我们关于[地形分类 OOD 挑战](https://github.com/weekgoodday/TCPOSS)的工作正在 IROS 2024 评审中。论文： [Can Confidence Quantification Methods Work When Facing Real-world OOD Data in Terrain Classification?](https://weekgoodday.github.io/files/IROS2024_Terrain_Classification.pdf)
- *2023.02 - 2023.11*: &nbsp; 🎉🎉 作为[北京大学 iGEM 队](http://2023.igem.wiki/peking)成员参加 [iGEM 2023](https://competition.igem.org/)，并获得 **金奖**。
</div>

<h1 id="publications">
  <span lang="en">📝 Publications</span>
  <span lang="zh">📝 论文发表</span>
</h1>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div><div class="badge">RAL</div><img src='images/papers/terrafusion.png' alt="TerraFusion Cover" width="100%"></div>
  </div>
  <div class='paper-box-text'>
    <div lang="en" markdown="1">
[TerraFusion: Semi-Supervised Vision-Proprioception Fusion for Robust Terrain Classification](https://ieeexplore.ieee.org/abstract/document/11184124)

Hongze Li\*, Rui Xie\*, Haotian Zhou, **<u>Jianghuan Xu</u>**, Jun Zhou, Wugen Zhou, Huijing Zhao, Hongbin Zha
    </div>
    <div lang="zh" markdown="1">
[TerraFusion: Semi-Supervised Vision-Proprioception Fusion for Robust Terrain Classification](https://ieeexplore.ieee.org/abstract/document/11184124)

李弘泽\*、谢睿\*、周浩天、**<u>许江环</u>**、周俊、周武根、赵慧婧、查红彬
    </div>
  </div>
</div>

<h1 id="honors">
  <span lang="en">🎖 Honors and Awards</span>
  <span lang="zh">🎖 荣誉与奖项</span>
</h1>

<div lang="en" markdown="1">
- *2025.06* **Outstanding Graduate of Beijing City**.
- *2025.06* Outstanding Graduate of Peking University.
- *2024.12* **National Scholarship**.
- *2024.12* Pacemaker to Merit Student of Peking University.
- *2024.04* Gold Medal of the 1st PKU Cup for Curling.
- *2023.11* Gold Medal of iGEM 2023.
- *2023.10* Merit Student of Peking University.
- *2023.10* Third Prize, Peking University Scholarship.
- *2023.06* Third Prize, Peking University College Cup (Challenge Cup).
- *2022.04* Peking University Freshman Scholarship, Second Prize.
</div>

<div lang="zh" markdown="1">
- *2025.06* **北京市优秀毕业生**。
- *2025.06* 北京大学优秀毕业生。
- *2024.12* **国家奖学金**。
- *2024.12* 北京大学三好学生标兵。
- *2024.04* 第一届“北大杯”冰壶赛金牌。
- *2023.11* 2023 年 iGEM 金奖。
- *2023.10* 北京大学三好学生。
- *2023.10* 北京大学奖学金三等奖。
- *2023.06* 北京大学“挑战杯”三等奖。
- *2022.04* 北京大学新生奖学金二等奖。
</div>

<h1 id="educations">
  <span lang="en">📖 Educations</span>
  <span lang="zh">📖 教育经历</span>
</h1>

<div lang="en" markdown="1">
- *2025.09 - present*: Graduate student, School of Intelligence Science and Technology, Peking University.
- *2021.09 - 2025.06*: Undergraduate, School of Electronics Engineering and Computer Science, Peking University.
- *2018.09 - 2021.06*: High school student, Dongfeng High School, Shiyan City, Hubei Province, China.
</div>

<div lang="zh" markdown="1">
- *2025.09 - 至今*：北京大学智能科学与技术学院研究生。
- *2021.09 - 2025.06*：北京大学电子工程与计算机科学学院本科生。
- *2018.09 - 2021.06*：湖北省十堰市东风高级中学高中生。
</div>
