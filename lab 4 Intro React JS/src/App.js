import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App =()=>{
  
  return(
    <div>
      <Mybody story="Calvin Klein CK One EDT 100ml"
              review_by="Review by Naratip Thongtaluang 5735512153"
      />

  </div>

  );

}

const Mybody =(props)=>{
  const[count,setCount]= useState(1)
 return(
     <div>
        <div class="jumbotron text-center">
        <h1>{props.story}</h1>
        <p>{props.review_by}</p> 
        <p>{count}</p>
        
        <button  onClick={ ()=>setCount(count+1)}> 
          <img src="https://pngimg.com/uploads/like/like_PNG54.png" alt="Like"  width="20" height="20"></img>Like
        </button>
        <span className="c1">
        <div class="fb-share-button" data-href="https://review-d3cc9.firebaseapp.com/?fbclid=IwAR39-QwVUz_QuqA03j0satJ7VDUexuLraCNjrr66E_amN5q9uBqucD_Mvjg" 
        data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Freview-d3cc9.firebaseapp.com%2F%3Ffbclid%3DIwAR39-QwVUz_QuqA03j0satJ7VDUexuLraCNjrr66E_amN5q9uBqucD_Mvjg&amp;src=sdkpreparse" 
        class="fb-xfbml-parse-ignore">share</a></div>
        </span>



          </div>
           
        <div class="container">
        <div class="row">
        <div class="col-sm-6">
        <h3>Product</h3>
        <p>Calvin Klein CK One EDT 100ml กระตุ้นเสน่ห์ความหอมสดชื่น กับ “CK One” หนึ่งในหน้าประวัติศาสตร์วงการน้ำหอม ที่ติดอับดับขายดีทั่วโลก และครองใจหนุ่มสาวแนวสปอร์ตตลอดกาล</p>
        <img src="https://th-live-01.slatic.net/p/5/calvin-klein-ck-one-edt-100ml-1475653525-6150078-7b787d4bfd6f0ca06877d887934a0c62-zoom.jpg" 
        class="rounded" alt="CK one" width="360" height="360"/> 
        </div>
        <div class="col-sm-6">
        <h3>Detail</h3>
        <ul>
            <li>น้ำหอม UNISEX รุ่นแรกๆ ของ Calvin Klein ที่ประสบความสำเร็จ รวมทั้งยังจุดประกายน้ำหอมแบบ UNISEX ให้แบรนด์อื่นๆ ด้วย</li>
            <li>เด่นชัดด้วยกลิ่นสดชื่นในโทนดอกไม้เป็นหลัก พร้อมให้อารมณ์แจ่มใสจากเบอร์กามอต ดอกไวโอเลต กุหลาบ อำพัน และมัสค์</li>
            <li>กลิ่นหอมน่าค้นหาจากเอสเซนส์ธรรมชาติหลากหลาย อาทิ ขิง มินท์ ดอกดาวเรือง วานิลลา ไม้จันทร์ ฯลฯ </li>
            <li>น้ำหอม CK One ต้นตำรับของกลิ่นเย็นสบาย ที่กระตุ้นความสดใส เหมาะสำหรับหนุ่มสาวรักอิสระ สำหรับใช้ในวันสบายๆ หรือมอบให้คนพิเศษ</li>
        </ul>
        <h3>BRAND</h3>
        <img src="https://th.ozcosmetics.com/syimages/201901/232742.jpg" 
        class="rounded" alt="Brand CK" width="360" height="360"/>
        </div>
        <div class="col-sm-6">
        <h3>USAGE</h3>
        <p>วิธีใช้: ถือขวดสเปรย์ห่างประมาณ 20-32 ซม. ฉีดพ่นเบาๆ ที่คอ ข้อมือ หลัง ใบหู และบริเวณใกล้จังหวะการเต้นของชีพจร และยังสามารถฉีดพ่นบนชายเสื้อ หรือกระโปรง ระวังอย่าฉีดบนเสื้อผ้าสีอ่อน และอย่าให้เข้าต</p>
        <img src="https://www.perfumebooth.com/blog/wp-content/uploads/2017/11/21753399_811765915649575_7138916609441197524_o.jpg" 
        class="rounded" alt="Use CK" width="360" height="360"/>
        </div>

        <div class="col-sm-6">
        <h3>Video</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pICOgpzNE2A" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
         </div>
     <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="https://www.facebook.com/Blackevillman">
          <img src="https://i.pinimg.com/originals/42/4f/62/424f621770a020d114e440bf5f80ee47.png" alt="logo"  width="30" height="30" 
          />  Facebook
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.instagram.com/keng_intania/?hl=th">
          <img src="https://cdn.icon-icons.com/icons2/1584/PNG/512/3721672-instagram_108066.png" alt="logo"  width="30" height="30" 
          />  Intragram
        </a>
      </li>
      </ul>

      </div>  
      </nav>
    </div>
 );

}

export default App;
