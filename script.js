
//Challenge No.1
const linkData1 = () => (
	axios.get('https://jsonplaceholder.typicode.com/posts/2/comments')
		.then( res => {
			const filterData = res.data.filter( value => {
					return value.postId == 2;
					
			});
			console.log("Nathanael Zorens")
			console.log("Id 2:",filterData)
		})
)


//Challenge No.2
const linkData2 = () => (
	axios.get('https://jsonplaceholder.typicode.com/posts')
		.then( res => {
			const filterData = res.data.filter( value => {
					return value.userId == 8;
					
			});
			console.log("Nathanael Zorens")
			console.log("Id 8:",filterData)
		})
)

linkData1();
linkData2();