import React from 'react';
let  ContenArray
let  number=0
export default class Todos extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Down_Display:'none',
            DownArrow_color:'10px solid rgba(45,45,45,0.15)',
            DownArrow_color_flag:true,
            ClearCompleted_Display:'none',
            Allborder:'1px solid rgb(219, 190, 190)',
            Activeborder:'1px solid #FFF',
            Completedborder:'1px solid #FFF',
            blurkeyup_flag:'true',
            Imformation: {
                array:[],
                circleColor:[],
                rectangleGreen:[],
                contentTxtColor:[],
                contentTxtUnderline:[],
                entryDisplay:[],
                Input_Display:[],
                Span_Display:[],
                Content_Padding:[],
                Tree_Display:[]
            }
    }
}
    render(){
     
        return <div>
                <div id='Input' className='TodosItem'>
                      <div  className='TodosItem_DownArrow'>
                          <div id='DownArrow' style={{display:this.state.Down_Display}} onClick={this.AllElection}>
                          <div id='DownArrow_White' className='TodosItem_DownArrow_White TodosItem_DownArrow_Identical'></div>
                          <div id='DownArrow_Ash' className='TodosItem_DownArrow_Ash TodosItem_DownArrow_Identical' style={{borderTop:this.state.DownArrow_color}}></div>
                          </div>
                      </div>
                      <input type="text" className='TodosItem_input' id='assignment' placeholder="what needs to be done?" autoComplete='off' onKeyUp={this.EnterKey}></input>
                      <div>
                          <div id='DropdownBox' ref='DropdownBox'>
                            { ContenArray}
                          </div>

                          <div id='BottomButton' style={{display:this.state.Down_Display}}>
                              <div id='Topmost' className='TodosItem_Topmost'>
                                    <div id='ItemsLeft'>{number}items left</div>
                                    <button id='All' className='TodosItem_Identical' style={{border:this.state.Allborder}} onClick={this.ShowAll}>All</button>
                                    <button id='Active' className='TodosItem_Identical' style={{border:this.state.Activeborder}} onClick={this.ShowActive}>Active</button>
                                    <button id='Completed' className='TodosItem_Identical' style={{border:this.state.Completedborder}} onClick={this.ShowCompleted}>Completed</button>
                                    <button id='ClearCompleted' className='TodosItem_ClearCompleted' style={{display:this.state.ClearCompleted_Display}} onClick={this.ClearCompleted}>Clear Completed</button>
                              </div>
                              <div  className='TodosItem_arrangement'>
                                    <div id='CentralSection' className='TodosItem_CentralSection TodosItem_CLL'></div>
                                    <div id='Lowest' className='TodosItem_Lowest TodosItem_CLL'></div>
                                    <div id='LowestLevel' className='TodosItem_LowestLevel TodosItem_CLL'></div>
                              </div>
                         </div>

                         </div>
                    
                 </div>
               </div>
    }
componentDidMount(){
    this.setState({})
    this.EstablishConten()
}
EnterKey=(event)=>{
const {Imformation}=this.state
const keycode=event.keyCode,assignment=event.target.value
if(keycode===13&&assignment.replace(/\s+/g,"")!==""){
   Imformation.array[number]=assignment
   Imformation.circleColor[number]='1px solid #ddd'
   Imformation.rectangleGreen[number]='#FFF'
   Imformation.contentTxtColor[number]='#1a1527'
   Imformation.contentTxtUnderline[number]=''
   Imformation.entryDisplay[number]=''
   Imformation.Input_Display[number]='none'
   Imformation.Span_Display[number]=''
   Imformation.Content_Padding[number]='10px'
   Imformation.Tree_Display[number]=''
   this.setState({
   Down_Display:'',
   Imformation:Imformation
   })
   number++
   this.EstablishConten()
   event.target.value=''
}

}
AllElection=()=>{
switch(this.state.DownArrow_color_flag){
    case true:
         this.ChangeDownArrow()
         this.ChangeColour()

         break;
    case false:
         this.ChangeDownArrow2()
         this.ChangeColourBack()
         break;
    default:
         break;

}
}
EstablishConten=()=>{
const {Imformation}=this.state
const sel=this
let i=-1
ContenArray=Imformation.array.map((item)=>{ 
    i++
    return <div className='TodosItem_entry' key={i} style={{display:Imformation.entryDisplay[i]}}>
    <div className='TodosItem_Hook'>
         <div className='TodosItem_circle' 
              style={{border:Imformation.circleColor[i],display:Imformation.Tree_Display[i]}} 
              onClick={sel.ChangeCircle.bind(this,i)}>

              <div className='TodosItem_rectangleGreen' 
                   style={{ backgroundColor:Imformation.rectangleGreen[i]}}>
              </div>

              <div className='TodosItem_rectangleWhite'></div>
         </div>
    </div>
    <div className='TodosItem_content' 
         style={{color:Imformation.contentTxtColor[i],
                 textDecoration:Imformation.contentTxtUnderline[i],
                 padding:Imformation.Content_Padding[i]}}>

        <input type='text' 
               onBlur={sel.InputBlur.bind(this,i)} 
               onKeyUp={sel.InputKeyup.bind(this,i)} 
               className='TodosItem_Double_click_Modification'  
               style={{display:Imformation.Input_Display[i]}}
               onFocus={sel.InputFocus.bind(this,i)}>
        </input>
        <span style={{display:Imformation.Span_Display[i]}} onDoubleClick={sel.DoubleClickModify.bind(this,i)}>{item}</span>
    </div>

    <div className='TodosItem_cross' onClick={sel.DeleteEntry.bind(this,i)}>
        <div className='TodosItem_fork'  style={{display:Imformation.Tree_Display[i]}}></div>
        <div className='TodosItem_fork2' style={{display:Imformation.Tree_Display[i]}}></div>
    </div>
    </div>
    })
}
ChangeColour=()=>{
    const {Imformation}=this.state
    for(let n=0;n<Imformation.array.length;n++){
        this.ChangeColourConcise(n)
    }
    }
    
ChangeColourBack=()=>{
    const {Imformation}=this.state
    for(let n=0;n<Imformation.array.length;n++){
        this.ChangeColourConcise2(n)
    }
    }

ChangeCircle=(keynumber)=>{
        const {Imformation}=this.state
        this.setState({
            ClearCompleted_Display:'',
        })
         if(Imformation.rectangleGreen[keynumber]==='#FFF'){
            this.ChangeColourConcise(keynumber)
            number--
         }else{
            this.ChangeColourConcise2(keynumber)
            number++
            this.setState({
                DownArrow_color:'10px solid rgba(45,45,45,0.15)',
                DownArrow_color_flag:true
                
            })
         } 
         if(number===0){
            this.ChangeDownArrow()
         }else if(number===Imformation.array.length){
            this.setState({
                ClearCompleted_Display:'none',
            })
         }
         this.componentDidMount()
    }
DeleteEntry=(Deletekey)=>{
    const {Imformation}=this.state
    if(Imformation.rectangleGreen[Deletekey]==='#FFF'){
        number--
    }
    this.DeleteImformation(Deletekey)
    if(Imformation.array.length===0){
       this.setState({
           Down_Display:'none',
           ClearCompleted_Display:'none'
       })
    }else if(number===Imformation.array.length){
        this.setState({
            ClearCompleted_Display:'none',
        })
     }
     this.componentDidMount()
}

ShowAll=()=>{
    const {Imformation}=this.state
    for(let n=0;n<Imformation.array.length;n++){
        Imformation.entryDisplay[n]=''
    }
    this.setState({
        Allborder:'1px solid rgb(219, 190, 190)',
        Activeborder:'1px solid #FFF',
        Completedborder:'1px solid #FFF',
        Imformation: Imformation
    })
    this.componentDidMount()
}
ShowActive=()=>{
    const {Imformation}=this.state
    for(let n=0;n<Imformation.array.length;n++){
        if(Imformation.rectangleGreen[n]==='#FFF'){
            Imformation.entryDisplay[n]=''
        }else{
            Imformation.entryDisplay[n]='none'
        }
    }
    this.setState({
        Allborder:'1px solid #FFF',
        Activeborder:'1px solid rgb(219, 190, 190)',
        Completedborder:'1px solid #FFF',
        Imformation: Imformation
    })
    this.componentDidMount()
}
ShowCompleted=()=>{
    const {Imformation}=this.state
    for(let n=0;n<Imformation.array.length;n++){
        if(Imformation.rectangleGreen[n]==='#FFF'){
            Imformation.entryDisplay[n]='none'
        }else{
            Imformation.entryDisplay[n]=''
        }
    }
    this.setState({
        Allborder:'1px solid #FFF',
        Activeborder:'1px solid #FFF',
        Completedborder:'1px solid rgb(219, 190, 190)',
        Imformation: Imformation
    })
    this.componentDidMount()
}
ClearCompleted=(event)=>{
    const {Imformation}=this.state
    for(let n=0; n<Imformation.array.length;n++){
    if(Imformation.rectangleGreen[n]==='#99CCCC'){
    this.DeleteImformation(n,event)
    n=n-1
    }   
    }
    if(Imformation.array.length===0){
        this.setState({
            Down_Display:'none',
            DownArrow_color:'10px solid rgba(45,45,45,0.15)',
            DownArrow_color_flag:true
        })
    }
    if(number===Imformation.array.length){
       this.setState({
           ClearCompleted_Display:'none'
       })
    }
    this.componentDidMount()
}
DoubleClickModify=(Modifykey)=>{
    const {Imformation}=this.state
    if(Imformation.Input_Display[Modifykey]==='none'){
    this.ChangeInput(Modifykey)
}
}
InputFocus=(Focuskey,event)=>{
   const {Imformation}=this.state
   event.target.value=Imformation.array[Focuskey]
}
InputKeyup=(upkey,event)=>{
    const {Imformation}=this.state
    if(event.target.value.replace(/\s+/g,"")!==''&&event.keyCode===13){
        Imformation.array[upkey]=event.target.value
        this.ChangeInput2(upkey)
    }else if(event.target.value.replace(/\s+/g,"")===""&&event.keyCode===13){
        this.DeleteImformation(upkey)
        number--
        this.setState({
            blurkeyup_flag:false
        })

    }
    if(Imformation.array.length===0){
        this.setState({
            Down_Display:'none',
            ClearCompleted_Display:'none'
        })
    }
}
InputBlur=(Blurkey,event)=>{
    const {Imformation}=this.state
    this.setState({
        blurkeyup_flag:true
    })
    if(event.target.value.replace(/\s+/g,"")!==''){
        Imformation.array[Blurkey]=event.target.value
        this.ChangeInput2(Blurkey)
    }else if(event.target.value.replace(/\s+/g,"")===""&&this.state.blurkeyup_flag===true){
        this.DeleteImformation(Blurkey)
        number--
    }
    if(Imformation.array.length===0){
        this.setState({
            Down_Display:'none',
            ClearCompleted_Display:'none'
            
        })
    }
}
ChangeColourConcise=(e)=>{
    const {Imformation}=this.state
    Imformation.circleColor[e]='1px solid #99CCCC'
    Imformation.rectangleGreen[e]='#99CCCC'
    Imformation.contentTxtColor[e]='#CCC'
    Imformation.contentTxtUnderline[e]='line-through'
    this.setState({
        Imformation:Imformation
    })
    this.componentDidMount()
}
ChangeColourConcise2=(e2)=>{
    const {Imformation}=this.state
    Imformation.circleColor[e2]='1px solid #ddd'
    Imformation.rectangleGreen[e2]='#FFF'
    Imformation.contentTxtColor[e2]='#1a1527'
    Imformation.contentTxtUnderline[e2]=''
    this.setState({
        Imformation:Imformation
    })
    this.componentDidMount()
}
ChangeDownArrow=()=>{
    this.setState({
        DownArrow_color:'10px solid #707070',
        DownArrow_color_flag:false,
        ClearCompleted_Display:'',
    })
    number=0
}
ChangeDownArrow2=()=>{
    const {Imformation}=this.state
    this.setState({
        DownArrow_color:'10px solid rgba(45,45,45,0.15)',
        DownArrow_color_flag:true,
        ClearCompleted_Display:'none',
    })
    number=Imformation.array.length
}
DeleteImformation=(e3)=>{
    const {Imformation}=this.state
    let Imformation2=Imformation
    Imformation2.array.splice(e3,1)
    Imformation2.circleColor.splice(e3,1)
    Imformation2.rectangleGreen.splice(e3,1)
    Imformation2.contentTxtColor.splice(e3,1)
    Imformation2.contentTxtUnderline.splice(e3,1)
    Imformation2.entryDisplay.splice(e3,1)
    Imformation2.Input_Display.splice(e3,1)
    Imformation2.Span_Display.splice(e3,1)
    Imformation2.Content_Padding.splice(e3,1)
    Imformation2.Tree_Display.splice(e3,1)
    this.setState({
        Imformation:Imformation2
    })
    this.componentDidMount()
}
ChangeInput=(changemodifykey)=>{
    const {Imformation}=this.state
    Imformation.Input_Display[changemodifykey]=''
    Imformation.Span_Display[changemodifykey]='none'
    Imformation.Content_Padding[changemodifykey]=''
    Imformation.Tree_Display[changemodifykey]='none'
    this.setState({
        Imformation:Imformation
    })
    this.componentDidMount()
}
ChangeInput2=(changemodifykey2)=>{
    const {Imformation}=this.state
    Imformation.Input_Display[changemodifykey2]='none'
    Imformation.Span_Display[changemodifykey2]=''
    Imformation.Content_Padding[changemodifykey2]='10px'
    Imformation.Tree_Display[changemodifykey2]=''
    this.setState({
        Imformation:Imformation
    })
    this.componentDidMount()
}
}