<?php
function MutliMentionalArraySort($arr){
	foreach($arr as $k=>$val){
		foreach($val as $key=>$value){
			$valueonename=split("__",$value);
			$valuetwoname=split("sdw",$valueonename[0]);
			$valuename=array('sdw'=>'sdw','end'=>$valueonename[1],'start'=>$valuetwoname[1]);
			$val[$key]=$valuename;
		}

		for($p=0;$p<count($val);$p++){
			for($i=0;$i<count($val);$i++){
				if($val[$i]['start']<$val[$i+1]['start']){
					$b=$val[$i]['start'];
					$val[$i]['start']=$val[$i+1]['start'];
					$val[$i+1]['start']=$b;
				}
			 }
		}
		foreach($val as $key=>$value){
			$val[$key]=$value[sdw].$value['start']."__".$value['end'];
		} 
				$array1[$k]=$val;
		return $array1;
	}
}


