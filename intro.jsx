********************** Getting Started **********************


This workshop will be about getting started with Git. 

We will begin by explaining some background on version control tools, 

then move on to how to get Git running on your system and finally how to get it set up to start working with. 
                                        ----

**********************About Version Control**********************

What is “version control”, and why should you care? 
Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.
===>
If you are a developer, graphic or web designer and want to keep every version of an image or layout (which you would most certainly want to), 
a Version Control System (VCS) is a very wise thing to use. It allows you to revert selected files back to a previous state, 
revert the entire project back to a previous state, compare changes over time, see who last modified something that might be causing a problem, 
who introduced an issue and when, and more. Using a VCS also generally means that if you screw things up or lose files, you can easily recover. 
In addition, you get all this for very little overhead.


=======>   Local Version Control Systems

Many people’s version-control method of choice is to copy files into another directory (perhaps a time-stamped directory, if they’re clever). 
This approach is very common because it is so simple, but it is also incredibly error prone. 
It is easy to forget which directory you’re in and accidentally write to the wrong file or copy over files you don’t mean to.

To deal with this issue, programmers long ago developed local VCSs that had a simple database that kept all the changes to files under revision control.



=== === === == ===
One of the most popular VCS tools is git.  git works by keeping patch sets (that is, the differences between files); 
it can then re-create what any file looked like at any point in time by adding up all the patches.





**********************Centralized Version Control Systems**********************
The next major issue that people encounter is that they need to collaborate with developers on other systems. 
To deal with this problem, Centralized Version Control Systems (CVCSs) were developed.

These systems (such as git) have a single server that contains all the versioned files, 
and a number of clients that check out files from that central place. 

===> 
This setup offers many advantages, especially over local VCSs. 
For example, everyone knows to a certain degree what everyone else on the projec t is doing




Distributed vs. Centralized Version Control Systems
First came the centralized version control system with RCS (1982) and its successor CVS (1987). 
Currently the most popular are Subversion, TFVC, Perforce and Clearcase. 
Using these systems all developers access a single central repository. If a change is made, 
it will reach every developer before they can commit their changes and unfortunately, 
that also includes broken code. Since there is only one “true” repository, 
working offline can be a challenge. 
In order to complete basic operations like adding the viewing history or committing code, you need access to the repository.
One of the first distributed version control systems was Bitkeeper (1997). 
Current popular tools include Git, GNU Arch and Mercurial. In the distributed model, every developer has his/her own copy of the repository. 
Using this approach, developers can work offline — they can commit, branch, merge branches, view history, anything they need as they have the whole repository at hand. Internet access is needed only when synchronization with the other team members occurs.









**********************Biblio**********************

https://en.wikipedia.org/wiki/Git
https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control
https://medium.com/@MentorMate/svn-git-out-of-here-how-to-choose-your-version-control-system-10b44750a75c88