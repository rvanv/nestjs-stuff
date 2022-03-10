import { Controller, Get } from "@nestjs/common";

@Controller('/app')
class AppController {
    
    @Get('/')
    getRootRoute() {
        return 'hi there';
    }

    @Get('/bye')
    getByeThere() {
        return 'bye there'
    }
}

export default AppController;