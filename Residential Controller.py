#!/usr/bin/python

def main():

    column = Column[10,2]
    elevator = Elevator[10,2]

class Elevator():
    def _init_(self,elevatorId,currentFloor,totalFloor):
        self.elevatorId = elevatorId
        self.floorRequestButton = []
        self.elevatorDirection = ""
        self.elevatorStatus = "idle"
        self.currentFloor = currentFloor
        self.requestedList = []
        self.door = "closed"

        for i in range(totalFloor):
            self.floorRequestButton.append(i)
    
    def move(self):
        if self.requestedList[0] > self.currentFloor
            self.elevatorStatus(up)

            elif self.requestedList[0] < self.currentFloor
            self.elevatorStatus(down)

    def elevatorUp(self)
        while self.requestedList != self.currentFloor 
            self.currentFloor +=

    def elevatorDown(self)
        while self.requestedList != self.currentFloor 
            self.currentFloor -=                 





main()








  controller = Controller(2,10)
  elevator = Elevator(10,2)
  controller.move(elevator.direction,elevator.elevatorNumber[1])

class Controller():
  def __init__(self,elevator,floor):
    self.elevator = elevator
    self.floor = floor
    self.direction = "up"

    
  def move(self,direction, elevator):
    print("elevator: ", elevator)
    print("Moving :", direction)



class Elevator():
  def __init__(self,floorTotal,elevatorNumber):
    self.elevatorNumber = []
    self.floorTotal = []
    self.currentFloor = 1
    self.status = "idle"
    self.direction = "Up"  

    for i in range(floorTotal):
        self.floorTotal.append(i)
    print(self.floorTotal)  

    for i in range(elevatorNumber):
        self.elevatorNumber.append(i)
    print(self.elevatorNumber)



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







  