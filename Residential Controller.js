//      FLOOR = FLOOR WHICH BUTTON IS PUSHED    //
//      CURRENTFLOOR = ELEVATOR FLOOR           //

//---------- COLUMN BUTTON PUSHED ----------

class CallButton {
    constructor(floor, direction) {
        this.direction = direction
        this.floor = floor


       // //console.log(floor);                                             //----------------
        ////console.log(direction);                                        //----------------
    }
}

//-----------------------------------------------------------------------------------------------

//---------- ELEVATOR BUTTON PUSHED  ----------

class ElevatorButton {
    constructor(requestedFloor) {
        this.requestedFloor = requestedFloor

        
    }
}


//-----------------------------------------------------------------------------------------------

//----------   ELEVATOR CLASS  ----------

class Elevator {
    constructor(elevatorId, currentFloor, totalFloor) {

        this.elevatorId = elevatorId
        this.floorRequestButton = []
        this.elevatorDirection = ""                                 // ---   "up"   or   "down"  -----
        this.elevatorStatus = "idle" 
        this.currentFloor = currentFloor
        this.requestList = []                                       ////////////////////////////////////////
        this.door = "closed"                                         // ("opened", "closed")

        for (var i = 1; i <= totalFloor; i++) {
            let elevatorButton = new ElevatorButton() 
            this.floorRequestButton.push(elevatorButton);
          //     //console.log(this.elevatorDirection)                                          //------------------

        }
//        console.log(this.requestedList)
    }


    move() {
        if (this.requestList[0] > this.currentFloor) {
            this.elevatorUp()
        } else if (this.requestList[0] < this.currentFloor) {
            this.elevatorDown()
        }
        
    }

    elevatorUp() {
        //   //console.log(requestList);
        //   //console.log(currentFloor);
        while (this.requestList[0] != this.currentFloor) { //////////////Floor and currentFloor //////
            this.currentFloor ++
       }
    }
       
    elevatorDown() { //////////////Floor and currentFloor //////
        //   //console.log(requestList);
        //   //console.log(currentFloor);
        while (this.requestList[0] != this.currentFloor) { //////////////Floor and currentFloor //////
            this.currentFloor --
        }
    }  
}



//-------------------------------------------------------------------------------------------------

//----------  COLUMN CLASS ----------

class Column {
    constructor(id, numberElevator, totalFloor) {
        this.id = id
        this.elevatorList = []
        // this.floorList = []
        this.callButtonList = []
        this.totalFloor = totalFloor

        //----------  LIST OF CALL BUTTONS ON COLUMNS  ----------

        
        for (var i = 0; i <= totalFloor; i++) {
            if (i != 1) {
                let callButton = new CallButton("down", i)
                this.callButtonList.push(callButton)
            }
            if (i != totalFloor) {
                let callButton = new CallButton("up", i)
                this.callButtonList.push(callButton)
            }
        }

        //----------  LIST OF ELEVATORS  ----------

        for (var e = 1; e <= numberElevator; e++) {
            this.elevatorList.push(new Elevator(e, 1, totalFloor))

        }
    }

    findBestElevator(floor, direction) {
                //console.log("findBestElevator");                                        //-------------------------------
                //console.log("floor", floor);                                            //-------------------------------
                //console.log("direction", direction);                                    //-------------------------------

        for (var i = 0; i < this.elevatorList.length; i++) {

            var elevator = this.elevatorList[i];
               // console.log(elevator);                                                                 //-------------------------------
                //console.log(this.elevatorList);                                                         //------------------------------
                //console.log("elevator.currentFloor", elevator.currentFloor);                            //-------------------------------
                //console.log("floor", floor);                                                            //-------------------------------
                //console.log("direction", direction);                                                    //-------------------------------
                //console.log("elevator.elevatorDirection", elevator.elevatorDirection);                  //-------------------------------
                //console.log("elevator.elevatorStatus", elevator.elevatorStatus);                        //-------------------------------
 
            if (floor == elevator.currentFloor && direction == elevator.elevatorDirection) {
                //console.log("CONDITION TOUT EGALE");                                                    //---------------------------------
                console.log(elevator)
                //console.log("elevator.currentFloor", elevator.currentFloor);                            //-------------------------------
  
                //console.log("floor", floor);                                                            //-------------------------------
                //console.log("direction", direction);                                                    //-------------------------------
                //console.log("elevator.elevatorDirection", elevator.elevatorDirection);                  //-------------------------------
                //console.log("elevator.elevatorStatus", elevator.elevatorStatus);                        //-------------------------------
                return elevator
            }
            //-- CURRENTFLOOR > ELEVATORFLOOR && ELEVATORSTATUS = MOVING OR STOPPED && ELEVATORDIRECTION = DIRECTION --
            else if (floor > elevator.currentFloor && direction == elevator.elevatorDirection) {
                //console.log("CONDITION EN ALLANT VERS LE HAUT");                                                       //------------------------------
                //console.log("elevator.currentFloor", elevator.currentFloor);                            //-------------------------------
                //console.log("floor", floor);                                                            //-------------------------------
                //console.log("direction", direction);                                                    //-------------------------------
                //console.log("elevator.elevatorDirection", elevator.elevatorDirection);                  //-------------------------------
                //console.log("elevator.elevatorStatus", elevator.elevatorStatus);                        //-------------------------------

                var elevator = this.findClosestElevator(floor, direction);
                                      //console.log("The closest ELEVATOR found is ", closestElevator);                  //-------------------------------            
                return elevator
            }


            //             //-- CURRENTFLOOR < ELEVATORFLOOR && ELEVATORSTATUS = MOVING OR STOPPED && ELEVATORDIRECTION = DIRECTION --
            else if (floor < elevator.currentFloor && direction == elevator.elevatorDirection) {
            //    console.log("CONDITION EN ALLANT VERS LE BAS BAS BAS");                      //------------------------------
            //    console.log(direction);
                var elevator = this.findClosestElevator(floor, direction);
                return elevator
            }

            //--CURRENTFLOOR = ELEVATORFLOOR && ELEVATORSTATUS = IDLE  
            
            else if (floor == elevator.currentFloor && elevator.elevatorStatus == "idle") {
                //console.log("CONDITION IDLE MEME ETAGE");                                    //---------------------------------
                                                 
                return elevator
            }

            //--ELEVATORSTATUS = IDLE--
            else if (elevator.elevatorStatus == "idle") {
                var elevator = this.findClosestElevator(floor, direction);
                //console.log("CONDITION IDLE  IDLE   IDLE");                                    //--------------------------------
                return elevator
            }
            else {
                var elevator = this.findLessBusyElevator(floor)
                return elevator
            }

        } 
    } 

    findClosestElevator(floor, direction) {
            //console.log("findClosestElevator");                                  //-------------------------------
            //console.log("floor", floor);                                            //-------------------------------
            //console.log("direction", direction);                                    //-------------------------------
            //console.log("floor", floor);                                            //------------------------------

        var activeList = [];
        var elevator;
            //console.log(this.elevatorList);                                              //------------------------------
        for (var i = 0; i < this.elevatorList.length; i++) {        
            var elevator = this.elevatorList[i];
                //console.log("elevator", elevator);                                       //-------------------------    


            var diff = floor - elevator.currentFloor;
                //console.log("diff", diff);                                       //------------------------------
                //console.log("currentfloor", elevator.currentFloor);                  //------------------------------                                                               
            var gap = Math.abs(diff); 
//                //console.log(gap);
            activeList.push({elevator, gap});
//               console.log("activelist", activeList);                            //------------------------------
            var shortestGap = activeList.sort(function (a, b) {
                return a.gap - b.gap
            });
//                //console.log("shortestGap", shortestGap);
//                //console.log(activeList);
            var elev = shortestGap[0].elevator;
            
            elevator = elev;
                //console.log('elev',elev);                                               //------------------------------
        } 
                //console.log(closestElevator)                                        //------------------------------
    return elevator;

} 


    findLessBusyElevator(floor){
        var elevator
        for (var i = 0; i < this.elevatorList.length; i++) {        
            var elevator = this.elevatorList[i];
                //console.log("elevator", elevator);                                       //-------------------------    
    
            var gapList = [];
            
            if (floor < elevator.currentFloor, elevator.elevatorDirection = "up"){
                var gapDiff = this.totalFloor - elevator.currentFloor;
                gapList.push({elevator, gapDiff});
//                console.log("activelist", gapList);                            //------------------------------
                var smallestGap = gapList.sort(function (a, b) {
                    return a.gapDiff - b.gapDiff
                });
    //                //console.log("smallestGap", smallestGap);
    //                //console.log(gapList);
                lessBusyElevator = smallestGap[0].elevator;


            }

            else if (floor > elevator.currentFloor, elevator.elevatorDirection = "down"){
                var gapDiff = elevator.currentFloor - 1;
                gapList.push({elevator, gapDiff});
//                console.log("gaplist", gapList);                            //------------------------------
                var smallestGap = gapList.sort(function (a, b) {
                    return a.gapDiff - b.gapDiff
                });
    //                //console.log("smallestGap", smallestGap);
    //                //console.log(gapList);
                var elevgap = smallestGap[0];
            
                elevator = elevgap;

            }

        }
        return elevator
    }

}
//----------  ELEVATORCONTROLLER CLASS ----------

class ElevatorController {

    constructor(nbColumn, numberElevator, totalFloor) {
        this.column = new Column(nbColumn, numberElevator, totalFloor)
    }

    requestElevator(floor, direction) {
        //console.log("call requestElevator");                                                 //-------------------------
        //console.log(floor)                                                                   //-------------------------
        //console.log(direction)                                                               //---------------------------------
        var bestElevator = this.column.findBestElevator(floor, direction);
        //console.log("The BEST elevator found is ", bestElevator);                             //-------------------------  
        bestElevator.requestList.push(floor)
        bestElevator.move();
        bestElevator.requestList.shift()
        //console.log(floor);                                                                 //------------------------------
        //console.log(direction);                                                             //------------------------------
        //console.log(bestElevator);                                                          //---------------------------------
 //       requestFloor(requestedFloor, bestElevator);
        return bestElevator;                                                                   //----------------------------
    }
    
    

     
    requestFloor(requestedFloor, elevator){ 
        //this.elevator = Elevator.bestElevator.id;
        var requestFloor = requestedFloor
        elevator.requestList.push(requestedFloor)
        elevator.move();
        elevator.requestList.shift()
    
    }

}







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function test() {

    //console.log("call TEST");                                                           //---------------------------------

    
    var controller_test_condition_1 = new ElevatorController(1, 2, 10);

    controller_test_condition_1.column.elevatorList[0].currentFloor = 2
    controller_test_condition_1.column.elevatorList[0].elevatorDirection = "idle"
    controller_test_condition_1.column.elevatorList[0].elevatorStatus = "idle"

    controller_test_condition_1.column.elevatorList[1].currentFloor = 6
    controller_test_condition_1.column.elevatorList[1].elevatorDirection = "idle"
    controller_test_condition_1.column.elevatorList[1].elevatorStatus = "idle"

    var best_elevator_test_1 = controller_test_condition_1.requestElevator(3, "up");
    var elevator = best_elevator_test_1
    var move_elevator_test_1 = controller_test_condition_1.requestFloor(7, elevator);
   
    console.log("best_elevator_test_1", best_elevator_test_1);

    var controller_test_condition_2 = new ElevatorController(1, 2, 10);

    controller_test_condition_2.column.elevatorList[0].currentFloor = 10
    controller_test_condition_2.column.elevatorList[0].elevatorDirection = "idle"
    controller_test_condition_2.column.elevatorList[0].elevatorStatus = "idle"

    controller_test_condition_2.column.elevatorList[1].currentFloor = 3
    controller_test_condition_2.column.elevatorList[1].elevatorDirection = "idle"
    controller_test_condition_2.column.elevatorList[1].elevatorStatus = "idle"

    var best_elevator_test_2 = controller_test_condition_2.requestElevator(1, "up");
    var elevator2 = best_elevator_test_2
    var move_elevator_test_2 = controller_test_condition_2.requestFloor(6, elevator2);
  
    console.log("best_elevator_test_2", best_elevator_test_2);


    var controller_test_condition_3 = new ElevatorController(1, 2, 10);

    controller_test_condition_3.column.elevatorList[0].currentFloor = 10
    controller_test_condition_3.column.elevatorList[0].elevatorDirection = "idle"
    controller_test_condition_3.column.elevatorList[0].elevatorStatus = "idle"

    controller_test_condition_3.column.elevatorList[1].currentFloor = 6
    controller_test_condition_3.column.elevatorList[1].elevatorDirection = "idle"
    controller_test_condition_3.column.elevatorList[1].elevatorStatus = "idle"

    var best_elevator_test_3 = controller_test_condition_3.requestElevator(3, "up");
    var elevator3 = best_elevator_test_3
    var move_elevator_test_3 = controller_test_condition_3.requestFloor(5, elevator3);
  
    console.log("best_elevator_test_3", best_elevator_test_3);

    var controller_test_condition_4 = new ElevatorController(1, 2, 10);

    controller_test_condition_4.column.elevatorList[0].currentFloor = 10
    controller_test_condition_4.column.elevatorList[0].elevatorDirection = "idle"
    controller_test_condition_4.column.elevatorList[0].elevatorStatus = "idle"

    controller_test_condition_4.column.elevatorList[1].currentFloor = 5
    controller_test_condition_4.column.elevatorList[1].elevatorDirection = "idle"
    controller_test_condition_4.column.elevatorList[1].elevatorStatus = "idle"

    var best_elevator_test_4 = controller_test_condition_4.requestElevator(9, "down");
    var elevator4 = best_elevator_test_4
    var move_elevator_test_4 = controller_test_condition_4.requestFloor(2, elevator4);
  
    console.log("best_elevator_test_4", best_elevator_test_4);

    var controller_test_condition_5 = new ElevatorController(1, 2, 10);

    controller_test_condition_5.column.elevatorList[0].currentFloor = 10
    controller_test_condition_5.column.elevatorList[0].elevatorDirection = "idle"
    controller_test_condition_5.column.elevatorList[0].elevatorStatus = "idle"

    controller_test_condition_5.column.elevatorList[1].currentFloor = 13
    controller_test_condition_5.column.elevatorList[1].elevatorDirection = "up"
    controller_test_condition_5.column.elevatorList[1].elevatorStatus = "moving"

    var best_elevator_test_5 = controller_test_condition_5.requestElevator(3, "down");
    var elevator5 = best_elevator_test_5
    var move_elevator_test_5 = controller_test_condition_5.requestFloor(2, elevator5);
  
    console.log("best_elevator_test_5", best_elevator_test_5);

    var controller_test_condition_6 = new ElevatorController(1, 2, 10);

    controller_test_condition_6.column.elevatorList[0].currentFloor = 1
    controller_test_condition_6.column.elevatorList[0].elevatorDirection = "idle"
    controller_test_condition_6.column.elevatorList[0].elevatorStatus = "idle"

    controller_test_condition_6.column.elevatorList[1].currentFloor = 6
    controller_test_condition_6.column.elevatorList[1].elevatorDirection = "idle"
    controller_test_condition_6.column.elevatorList[1].elevatorStatus = "idle"

    var best_elevator_test_6 = controller_test_condition_6.requestElevator(10, "down");
    var elevator6 = best_elevator_test_6
    var move_elevator_test_6 = controller_test_condition_6.requestFloor(3, elevator6);
  
    console.log("best_elevator_test_6", best_elevator_test_6);


    //console.log("fin");                                                                 //---------------------------------
    ////console.log();
}


test()


//     array.forEach(function(currentValue), thisValue)
//     column.elevatorList.forEach(function(elevator)