---
layout: post
title:  "Gradient Descent"
date:   2020-12-31 12:34:09 +0100
categories: concept
img: 
---


The Gradient Descent is an **optimization** algorithm to find the **minimum point** in a **[[Cost function]].**

In the following example we have an error (or cost or loss) function $J(w_1, w_2)$ that depends on the parameters $w_1$ and $w_2$.

The **goal** of all this is to **find** the values for $w_1$ and $w_2$ that gives you the minimum point in the cost fucntion

We take a point  in the function 📍 and we calculate the [[Gradient]] at that point: 

$$\nabla J = grad \; J = \left[\frac{\partial J}{\partial w_1}, \frac{\partial J}{\partial w_2}\right]$$
![[grdient-descent.jpg]]

>"point" = parameters $w$

1. We start by picking a random initial point which is the same as saying we initialize the parameters $w_1$ and $w_2$ randomly. 
2. Plug those parameters in the function $J$ and compute the [[Gradient]]
3. Calculate the new parameters according to:



	$$x_2 = x_1 - \alpha \nabla F(a)$$
	
	- $x_2$ = next position or new parameters
	- $x_1$ = current position or current parameters
	- $\alpha$ = size of the step
	- $\nabla F(a)$ = direction of fastest *ascest*
	
	> $\alpha \nabla F(a)$ means: The step of size $\alpha$ that you take in the direction  $\nabla F(a)$
	
The **minus sign** is important because the gradient gives you the direction of the **ascent** but ywhat you want is to find the **minimum** point of the function.

---
In the next picture we can see that the parameters $w*$ are the ones that gives you the minimum point of the function:
	

![[gradient-descent-2.jpg]]