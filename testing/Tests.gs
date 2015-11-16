// 34567890123456789012345678901234567890123456789012345678901234567890123456789

// JSHint (this file) - TODO

/**
 * Tests.gs
 * ========
 *
 * Unit test functions
 */

function test_createCard(){

  var app = new App()

  // Look for 'RTM List 1' in the 'Rose Task Manager' and 
  // add a new card to it

  app.getMyBoards().some(function(board) {
    
    if (board.getName() === 'Rose Task Manager') {
      
      Logger.log('Found RTM board')
      
      app.getBoardLists(board.getId()).some(function(list) {

        if (list.getName() === 'List 1') {

          Logger.log('Found List 1')

          app.createCard({
            name: 'test card 4', 
            idList: list.getId(),
          }) 
          
          Logger.log('Created new card')
        }
      })   
    }
  })
  
} // testOpen()
