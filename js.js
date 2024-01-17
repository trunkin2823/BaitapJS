function Grade(text_name,score) {
    var string_grade = "";
    if(text_name != ''){
        if(score != ''){
            if(score >= 0 && score <= 100){
                if(score > 90){
                    string_grade = 'Exelence'
                }else if(score > 80){
                    string_grade = 'Very Good'
                }else if(score > 60){
                    string_grade = 'Fair'
                }else if(score >= 50){
                    string_grade = 'Medium'
                }else{
                    string_grade= 'Fail'
                }
                document.getElementById("str_grade").innerHTML = text_name +"'s grade is <b>"+ string_grade + '</b>'
            }else{
                alert("Score must be between 0 -> 100")
            }
        }else{
            alert("Please enter a score")
        }
    }else{
        alert("Please enter a name")
    }
}