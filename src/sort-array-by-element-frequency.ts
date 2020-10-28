export function getSortedElementFrequency(items: any[]) : any[] {

    const occurence = (item: any) => items.filter((e: any) => e == item).length;

    return items.sort((a,b) =>
        occurence(a) === occurence(b) ?
            items.indexOf(a) - items.indexOf(b) :
            occurence(b) - occurence(a)
    );
}