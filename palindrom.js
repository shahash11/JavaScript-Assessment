const string="madam"

function isPalindrom(name){
    for(var i=0;i<name.lenth;i++)
    {
        if(name[i]!==name.lenth-1-i){
            return false
        }
    }
    return true;
}
