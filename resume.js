function writeIntro() {
    var intro = document.getElementById('intro');

    intro.innerHTML += info.intro;

}
function writeSkills() {
    var div_lang = document.getElementById('skills_languages');
    div_lang.innerHTML += '<ul>';
    for(var i = 0; i < info.skills.languages.length; i++){
        div_lang.innerHTML += '<li>' + info.skills.languages[i] +'</li>';
    }
    div_lang.innerHTML += '</ul>';
    var div_tools = document.getElementById('skills_tools');
    div_tools.innerHTML += '<ul>';
    for(var i = 0; i < info.skills.tools.length; i++){
        div_tools.innerHTML += '<li>' + info.skills.tools[i] +'</li>';
    }
    div_tools.innerHTML += '</ul>';
    var div_os = document.getElementById('skills_os');
    div_os.innerHTML += '<ul>';
    for(var i = 0; i < info.skills.os.length; i++) {
        div_os.innerHTML += '<li>' + info.skills.os[i] +'</li>';
    }
    div_os.innerHTML += '</ul>';
}
function createProject(p, div){
    // project title
    var pTitle = document.createElement('div');
//    pTitle.setAttribute('class','project_title');
    pTitle.innerHTML = '<span class="project-title">'+p.name +'</span>';
    
    // description
    if(p.description != ""){
        pTitle.innerHTML += ' - <span class="project-desc">'+p.description+'</span>';
    }
    // when
    pTitle.innerHTML += ', <span class="project-date">'+p.when+'</span>';

    div.appendChild(pTitle);
    var pDetail = document.createElement('div');
    // detail
    pDetail.innerHTML+= '<span class="project-detail">'+p.detail+'</span>';
    div.appendChild(pDetail);        
        
    // tags
    var pTags = document.createElement('div');
    var tags = [];
    for(var j = 0; j < p.tags.length; j++){
        tags[j] = document.createElement('div');
        tags[j].setAttribute('class','tag');
        tags[j].innerHTML = p.tags[j];
        pTags.appendChild(tags[j]);
    }
    div.appendChild(pTags);
    
}
function writeProjects(){
    var projdiv = document.getElementById('projects');
    var projects = [];
    for(var i = 0; i < info.projects.length; i++){
        projects[i] = document.createElement('div');
        projects[i].setAttribute('class','project')
        createProject(info.projects[i],projects[i]) 
        projdiv.appendChild(projects[i]);
    }
}
function createJob(w,div){
    // job title/ position
    var jTitle = document.createElement('div');
    jTitle.innerHTML = '<span class="job-title">'+w.position +'</span>';
    
    // company

        jTitle.innerHTML += ' <br> <span class="job-company">'+w.company+'</span>';

    // when
    jTitle.innerHTML += ', <span class="job-start">'+w.startDate+'</span>';
    jTitle.innerHTML += ' - <span class="job-end">'+w.endDate+'</span>';

    div.appendChild(jTitle);
    var jDetail = document.createElement('div');
    // job detail
    jDetail.innerHTML+= '<span class="job-desc">'+w.description+'</span>';
    div.appendChild(jDetail);        
        
    // tags
    var jTags = document.createElement('div');
    var tags = [];
    for(var j = 0; j < w.tags.length; j++){
        tags[j] = document.createElement('div');
        tags[j].setAttribute('class','tag');
        tags[j].innerHTML = w.tags[j];
        jTags.appendChild(tags[j]);
    }
    div.appendChild(jTags); 
}
function writeJobs(){
    var workdiv = document.getElementById('experience');
    var work = [];
    for(var i = 0; i < info.experience.length; i++){
        work[i] = document.createElement('div');
        work[i].setAttribute('class','job')
        createJob(info.experience[i],work[i]) 
        workdiv.appendChild(work[i]);
    }
}
function createEdu(e, div) {
    var eTitle = document.createElement('div');
    eTitle.innerHTML= '<span class="edu-school">'+e.school +'</span>';
    eTitle.innerHTML += ' - <span class="edu-city">'+e.city+'</span>';
    eTitle.innerHTML += ' <br><span class="edu-degree">'+e.degree+'</span>';
    
    div.appendChild(eTitle);
    var eDetail = document.createElement('div');
    eDetail.innerHTML = '<span class="edu-school">'+e.grad +'</span>';
    eDetail.innerHTML+=  ' GPA: <span class="edu-city">'+e.gpa+'</span>';
    
    div.appendChild(eDetail);
}
function writeEdu() {
    var edudiv = document.getElementById('education');
    var schools = [];
    for(var i = 0; i < info.education.length; i++){
        schools[i] = document.createElement('div');
        schools[i].setAttribute('class','education');
        createEdu(info.education[i], schools[i]);
        edudiv.appendChild(schools[i]);
    }
}