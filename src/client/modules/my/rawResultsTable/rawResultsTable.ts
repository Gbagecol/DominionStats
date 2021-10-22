import { LightningElement } from 'lwc';
import { getRawResults } from 'my/resultsFetcher';


export default class RawResultsTable extends LightningElement {

    tableData = this.getData();
    rawData = this.connectedCallback();

    getData() {

        //eventual function to return a processed list of data to place into the table

        return [
            {
                name: "Dave",
                gamesPlayed: 17,
                gamePercent: 89.47,
                averagePoints: 26,
                totalPoints: 442,
                totalFirst: 7,
                percentFirst: 41.18
            },
            {
                name: "Dave",
                gamesPlayed: 17,
                gamePercent: 89.47,
                averagePoints: 26,
                totalPoints: 442,
                totalFirst: 7,
                percentFirst: 41.18
            },
            {
                name: "Dave",
                gamesPlayed: 17,
                gamePercent: 89.47,
                averagePoints: 26,
                totalPoints: 442,
                totalFirst: 7,
                percentFirst: 41.18
            },
        ];
    
    }

    async connectedCallback() {
        let data = await getRawResults();
        console.log(data);
        return data;
        // this.data = await getRawResults();
        // this.data = extractPlayerStats(await getRawResults());
    }

}