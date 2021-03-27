# What is Secure Software Development?

<p align="right">
18/01/2021
</p>


With the developing technology, reaching to information and using information has became way too easy.
Of course this situation is also turned into advantage to cyber attackers, and new tactics and technics are developing while cyber attacks increasing.

**At the same time, we also see malicious people who are trying to have the data forcefully, then using it for their own good.**

Meanwhile a software trying to do it work under threat or attack, successfully protecting and taking preventions before is named providing software security. Goal of software security is making a development which is protected and resistant against all attacks.

Attacks against software can have goals like taking software totally out of service, injecting detrimental code to change software's codes and then running them without their goal; and with determinating weak points of software and sneaking into another softwares in system or things like that.

# Secure Software Developing Models:

*When we look at the software development models that have been put forward so far, it is seen that the secure software development life cycle is the basis of all of them.*

Education and awareness raising, which is the first step of the cycle, is an element that is the basis of the process and should continue throughout the entire process. At this stage, staff should be made aware of threats and trained in **security tests**. In the needs analysis part, the necessary needs for software development, security and testing should be determined.

Using methods such as threat modeling and privacy risk analysis in design and risk analysis, the risk groups the software will be in are determined. During development, the software starts to be developed according to the methods determined in the previous steps. Meanwhile, methods such as source code analysis should be used.

The software that emerges during the verification phase is tested with criteria such as confidentiality, integrity, accessibility, which are the basic principles of security, and it is ensured that the gaps that may arise are eliminated. When commissioning, the software is final and ready to be published. The result of previous operations is observed at this stage as the software is presented to the user.

In the openness management and feedback step, the feedback received from the user and the situations that are overlooked or need to be changed in the software are determined. As a result of the detection of these situations, the personnel are retrained for missing or wrong places. For this reason, the beginning of the process is taken.

## Talent Maturity Model

Main focus in that model which is developed in the year 1986 is developing already existing applications. Main goal is, instead of developing the product suitable with **software standarts**; eliminating weaknesses in particular areas.

## Integrated Capability Maturity Model

It based CMM model and it goals is providing solutions like checking and managing of an organization.

## Microsoft Security Development Lifecycle

It is a model developed to integrate security and privacy in order to solve the problems encountered by Microsoft. In this model based on the basic software life cycle, the process is completely dependent on the project manager.

## Software Guarantee Maturity Process

This model developed by OWASP is existed to aim including data security to software developing process. It can be used for a single job, or can be used in the whole or a certain part of the organization.

In addition to these models, there are many secure software development approaches and each has advantages and disadvantages over the others. It is quite difficult to approach that one model is better than other models. The important point is analyzing the needs by taking into account the structure, size and work of the organization and choosing the appropriate model. In a wrong choice, the developer or test teams may have more workload than necessary and the work can become more complex than it is. On the other hand, when an inadequate model is selected, users may be victimized and the organization may be in a difficult situation due to the vulnerabilities that may occur.

# Factors That Are Threating Secure Software

## Code Placement

Code placement is the execution of code fragments that allow the exploitation of the vulnerabilities in a system by using the security vulnerabilities of the software or network environment, by placing them in the target system.

To prevent that situation, inputs should be filtered, keywords that are using in programming languages should be avoided, in SQL operations, all input / output operations should be checked by using methods such as stored procedures. In addition to these, the layered architecture of the developed application also plays an active role in preventing dangers.

## XSS Vulnerabilities

XSS is an attack type which can be found OWASP Top 10 list. The result of keeping an input from the user in the form of html in the database. If a malicious person writes and sends Javascript code to the comment section of a site, if there is an xss angle, this written code can work and combine. There are three types of xss vulnerabilities.

## Reflected XSS

Javascript code is sent while waiting for an input from the user. If this input is wanted to be displayed on the screen, the code written works.

## Stored/Persistent XSS

In this type of xss attack, the input received from the user is stored somewhere like the database rather than being printed directly on the screen. Then, normally, when users visit the relevant page, this code works as if it was written by the developer on that page.

## DOM XSS

In a Dom-based xss attack, the malicious code runs directly on dom objects without reaching the server side. Let's say we created a user list with javascript. If there is an XSS vulnerability, we can make an operation we want by manipulating the process with outside intervention while printing this list.

## SQL Injection

SQL Injection is a vulnerability that occurs using characters that have special meaning to compilers called meta-characters. Attackers reach the database by typing characters that will manipulate the SQL code in the fields where information such as username and password received from the user are entered. For example let we think we entered an input like this: 10 or 1=1. This input's SQL response is like that;


``` SQL
 SELECT * FROM Users WHERE UserID = 10 or 1=1
```

In this request we provided or 1=1 which is located in WHERE condition to always return true.

In another case, when entering data in a numerical field, the data type must be checked.

``` SQL
SELECT * FROM Users WHERE UserID = “”
```

For example with the comand at above, if we enter a parameter like "1; DROP TABLE 'Users';" table will be deleted.

## SHELL Injection

A vulnerability can be found in any application that uses the command line. It must be checked whether the received data is a command line specific word. Otherwise, the attacker can reach the command line and undesirable situations may occur in the system.

Nowadays, everything is on the internet and the security of software and hardware is very important. If the necessary precautions are not taken, the losses that will occur will damage both the reputation of the institution and the economy. With the developed tools, it has become quite easy to carry out cyber attacks. These developments should be followed. In addition, the personnel in the institution should be trained on related subjects and trainings should be given in the field of cyber security.

### Source

Beydağlı, E., Kara, M., Bahşi, H., & Alparslan, E. (2009). Güvenli Yazılım Geliştirme Modelleri ve Ortak Kriterler. 4. Ulusal Yazılım Mühendisliği Sempozyumu, 11-17.

Güvenli Yazılım Geliştirme Kılavuzu. (2018). TÜBİTAK BİLGEM.

SARIMAN, G., & KÜÇÜKSİLLE, E. U. (2013). Güvenli Yazılım Geliştirme Yaşam Süreci ve Statik Kod Analizi. 6. Uluslararası Bilgi Güvenliği ve Kriptoloji Konferansı, 282-286.

YILMAZ, S., & SAĞIROĞLU, Ş. (2013). Yazılım Güvenliği Üzerine Bir İnceleme. 6. Uluslararası Bilgi Güvenliği ve Kriptoloji Konferansı, 167-173.

Author: Intern Efdal İncesu

Editor: Hamza Şamlıoğlu

Translated by: Melih FIRAT

Translation Editor:





