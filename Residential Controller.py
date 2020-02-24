def main():

column = Column[10, 2]
elevator = Elevator[10, 10, 2]

# ELEVATOR CLASS-------------------------------------

class Elevator():
    def _init_(self, elevatorId, currentFloor, totalFloor):
        self.elevatorId = elevatorId
        self.floorRequestButton = []
        self.elevatorDirection = ""
        self.elevatorStatus = "idle"
        self.currentFloor = currentFloor
        self.requestedList = []
        self.door = "closed"
        for i in range(totalFloor):
            self.floorRequestButton.append(i)

# MOVE FUNCTION

    def move(self):
        if self.requestList[0] > self.currentFloor:
           self.elevatorUp(up)

            elif self.requestList[0] < self.currentFloor:
            self.elevatorDown(down)

    def elevatorUp(self):
        while self.requestedList != self.currentFloor:
            self.currentFloor +=

    def elevatorDown(self):
        while self.requestedList != self.currentFloor:
            self.currentFloor -=

# COLUMN CLASS---------------------------------------
class Column():
    def _init_(self, id, numberElevator, totalFloor):
        self.id = id
        self.elevatorList = []
        self.callButtonList = []
        self.totalFloor = totalFloor

            for i in range(totalFloor):
                self.floorTotal.append(i)
                if i != 1:
                callButton = new CallButton("down", i)
                self.callButtonList.push(callButton)

                if i != totalFloor:
                        callButton = new CallButton("up", i)
                        self.callButtonList.push(callButton)

# LIST OF ELEVATORS

    for i in range(numberElevator):
        self.floorRequestButton.append(i)

# FINDBESTELEVATOR FUNCTION -----------------------

    def findBestElevator(self, floor, direction):
        for i in range(self.elevatorList):
            elevator = self.elevatorList

# 1ST CONDITION CURRENT FLOOR = ELEVATOR FLOOR &  DIRECTION = ELEVATORDIRECTION
            if (floor == elevator.currentFloor & & direction == elevator.elevatorDirection:
            return elevator

# 2ND CONDITION CURRENTFLOOR > ELEVATORFLOOR && ELEVATORSTATUS = MOVING OR STOPPED && ELEVATORDIRECTION = DIRECTION --
             if floor > elevator.currentFloor & & direction == elevator.elevatorDirection:
                elevator = self.findClosestElevator(floor, direction)
             return elevator

# 3RD CONDITION CURRENTFLOOR < ELEVATORFLOOR && ELEVATORSTATUS = MOVING OR STOPPED && ELEVATORDIRECTION = DIRECTION --
            elif floor < elevator.currentFloor & & direction == elevator.elevatorDirection:
                elevator = self.findClosestElevator(floor, direction)
            return elevator

# 4TH CONDITION CURRENTFLOOR = ELEVATORFLOOR && ELEVATORSTATUS = IDLE
            elif floor == elevator.currentFloor & & elevator.elevatorStatus == "idle":
            return elevator

# 5th CONDITION ELEVATORSTATUS = IDLE--
            elif elevator.elevatorStatus == "idle":
                elevator = self.findClosestElevator(floor, direction)
            return elevator

# 6th CONDITION FINDLESSBUSYELEVATOR
            else:
                elevator = self.findLessBusyElevator(floor)
            return elevator


    def findClosestElevator(self, floor, direction):

        activeList = []
        elevator

        for i in range(self.elevatorList):
            elevator = self.elevatorList

            diff = floor - elevator.currentFloor
            gap = abs(diff)
            activeList.append(elevator, gap)

            shortestGap = sort(activeList)
            elevator = shortestGap[0].elvator
            return elevator

    def findLessBusyElevator(self,  floor):
        elevator

        for i in range(self.elevatorList):
            elevator = self.elevatorList
    
            gapList = []
            
            if floor < elevator.currentFloor, elevator.elevatorDirection = "up":
                gapDiff = self.totalFloor - elevator.currentFloor

                gapList.append(elevator, gapDiff)
                smallestGap = sort(gapList) 
                elevator = smallestGap[0].elevator
                return elevator

            else floor > elevator.currentFloor, elevator.elevatorDirection = "down":
                gapDiff = elevator.currentFloor - 1
                gapList.append(elevator, gapDiff)
                smallestGap = sort(gapList) 
                elevator = smallestGap[0].ele
vator
                return elevator

# ELEVATOR CONTROL CLASS -------------------------------------
class ElevatorController():
    def _init_(self, id, elevatorNumber, totalFloor):
    
        self.column = new Column(nbColumn, numberElevator, totalFloor)

    def requestElevator(self, floor, direction):
        bestElevator = self.column.findBestElevator(floor, direction)
        bestElevator.requestList.append(floor)
        bestElevator.move()
        bestElevator.requestList.remove(floor)
        return bestElevator
       

    def requestFloor(self, requestedFloor, elevator):
        requestFloor = requestedFloor
        elevator.requestList.append(requestedFloor)
        elevator.move()
        elevator.requestList.remove()
    