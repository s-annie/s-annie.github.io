---
layout: post
title: Rapidly-exploring random tree
categories: [Robotics]
---
The Rapiely-exploring random tree is an algorithm to finle path. RRT* is an optimized modified algorithm that aims to achieve a shortest path.

RRT Pseudo Code
```
Qgoal       // region that identifies success
Counter = 0 // keeps track of iterations
lin = n     // number of iterations algorithnm should run for
G(V, E)     // Graph containing edges and vertices, initialized as empty
While counter < lim:
    Xnew = RandomPosition()
    If IsInObstacle(XNew) == True:
        continue
    XNearest = Nearst(G(V, E), XNew) // find nearest vertex
    Link = Chain(Xnew, Xnearest)
    G.append(link)
    if Xnew in Qgoal:
        Return G
Return G
```

RRT* is an optomozed version of RRT. When the number of nodes approaches infinity, the RRT* algorithm will feliver the shortest possible path to the goal.
It is based on RRT, but two key additions to the algorithm result in significantly different results.
First , RRT* records the distance each vertex has traveled relative to its parent vertex. This is referred to as the cost() of the vertex. 
After the closest node is found in the graph, a neighborhood of verticles in a fixed radius from a new node are examined. 
If a node with a cheaper cost than the proximal node is found, the cheaper node replaces the proximal node.

The second diffrent RRT* adds is the rewiring of the tree. After a vertex has been connected to the cheapest neighbor, the neighbors are checked if being rewired to the newly added vertex will
make their cost decrease. If the cose does indeed decrease, the neighbor is rewired to the newly added vertex.


RRT* Pseudo Code
```
Rad = r
G(V, E) // Graph containing edges and verticles
For itr in ranges(0...n)
    Xnew = RandomPosition()
    If Obstacle(Xnew) == True try again
    Xnearest = Nerearst(G(V, E), Xnew)
    Cost(Xnew) = Distance(Xnew, Xnearest)
    Xbest, Xneighbors = findNeighbors(G(V, E), Xnew, Rad)  // This is the difference 1
    Link = Chain(XNew, Xbest)
    For x in XNeighbors
        If Cost(Xnews) + Distance(Xnew, x') < Cost(x')      // This is the difference 2
            Cost(X') = Cost(Xnew) + Distance(Xnew, x')
            Parent(x') = Xnew
            G += {Xnew, x'}
    G += Link
return G
```