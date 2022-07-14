$(function(){
    var turn=1 // ターンを管理する変数
    var mflag=false //勝敗を管理する変数
    var bflag=false

    // スタート画面
    $("input").click(function(){
        $("table").show();
        $(this).hide();
        $("p").text("1Pのターン")
        $("p").css("color","#ff0000")
        
    })

    $("table tr td").click(function(){
        // 上書きされないようにクラス付与
        for(var i=0;i<9;i++){
            if(!$("td").eq(i).text()==""){
                $("td").eq(i).addClass("done")
            }
        }

        // 入力部分
        if(!$(this).hasClass("done")){ // doneなら上書きできない
            if(turn==1){
                $("p").text("2Pのターン")
                $("p").css("color","#0000ff")
                $(this).text("〇")
                $(this).css("color","#ff0000")
                turn=-1 // ターンチェンジ
            }else if(turn==-1){
                $("p").text("1Pのターン") // テキストの変更
                $("p").css("color","#ff0000")
                $(this).text("×")
                $(this).css("color","#0000ff")
                turn=1
            }
        }
        
        // 横の判定
        for(var i=0;i<3;i++){
            var m_cnt=0
            var b_cnt=0
            for(var j=0;j<3;j++){
                if($("td").eq(3*i+j).text()=="〇"){
                    m_cnt+=1
                }
                if($("td").eq(3*i+j).text()=="×"){
                    b_cnt+=1
                }
            }
            // そろってるかの判定
            if(m_cnt==3){
                mflag=true
                break;
            }else if(b_cnt==3){
                bflag=true
                break;
            }
        }

        // 縦の判定
        for(var i=0;i<3;i++){
            var m_cnt=0
            var b_cnt=0
            for(var j=i;j<9;j+=3){
                if($("td").eq(j).text()=="〇"){
                    m_cnt+=1
                }
                if($("td").eq(j).text()=="×"){
                    b_cnt+=1
                }
            }
            // そろってるかの判定
            if(m_cnt==3){
                mflag=true
                break;
            }else if(b_cnt==3){
                bflag=true
                break;
            }
        }

        // 斜めの判定
        var cnt=0
        var m_cnt=0
        var b_cnt=0
        var i=0
        while(cnt<3){
            if($("td").eq(i).text()=="〇"){
                m_cnt+=1
            }
            if($("td").eq(i).text()=="×"){
                b_cnt+=1
            }
            i+=4
            cnt+=1
        }
        // そろってるかの判定
        if(m_cnt==3){
            mflag=true
        }else if(b_cnt==3){
            bflag=true
        }
        
        // 右上方向の斜め
        cnt=0
        m_cnt=0
        b_cnt=0
        var j=2
        while(cnt<3){
            if($("td").eq(j).text()=="〇"){
                m_cnt+=1
            }
            if($("td").eq(j).text()=="×"){
                b_cnt+=1
            }
            j+=2
            cnt+=1
        }
        // そろってるかの判定
        if(m_cnt==3){
            mflag=true
        }else if(b_cnt==3){
            bflag=true
        }

        // 引き分けの判定
        var h_cnt=0
        for(var i=0;i<9;i++){
            if($("td").eq(i).hasClass("done")){
                h_cnt+=1
            }
        }
        if(h_cnt==9){
            $("p").text("引き分け")
            $("p").css("color","#000000")
        }

        // 勝敗の判定
        if(mflag){
            $("p").text("1Pの勝ち！")
            $("p").css("color","#ff0000")
            $("td").addClass("done") //空いているマスに上書きできないようにクラス付与
        }
        if(bflag)
            $("p").text("2Pの勝ち！")
            $("p").css("color","#0000ff")
            $("td").addClass("done")
        }

    })
})
