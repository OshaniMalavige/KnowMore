const apiBaseUrl = "http://127.0.0.1:8000/";

//share
const share_my_knowledge= `${apiBaseUrl}search/ShareKnowledge/`;

// my knowledgebase for each student
const my_knowledge_own= `${apiBaseUrl}search/myownkmw`;

// badge count
const each_bade_count= `${apiBaseUrl}search/badge_count`;

// citation count
const each_citation_count= `${apiBaseUrl}search/citation_counts`;

export {
share_my_knowledge,
my_knowledge_own,
each_bade_count,
each_citation_count
}