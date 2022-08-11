# Profile Generator (v0.1)

<p  align="center">
<img  src="https://i.ibb.co/gjj1Wzq/Profile-Generator.jpg"/>
</p>

Simple Profile Generator using NextJS that create simple card of your Bio with Markdown. Just simply add every label like Photo Profile, Title, Short Note, Social Media Account, and Simple Showcase. Feel free to use and deploy to your beloved deploy services. Live Demo on https://profile-generator.vercel.app/

# How to Use

Just simply [click here](https://vercel.com/new/clone?repository-url=https://github.com/dendense/profile-generator) to deploy with Vercel. Jump to **/json/data.json** and change every variable as you want.

**`DATA.JSON`**
```json
{
	"bio": {
		"sitename": "DENDENSE",
		"imageUrl": "https://i.ibb.co/ypktsr4/DSCF6559.jpg",
		"name": "Deny Farras Febriyanto",
		"birth": "10/02/2000",
		"rank": "2nd Sergeant",
		"horoscope": "Aquarius"
	},

	"social": {
		"facebook": "http://fb.com/deniyanto123",
		"twitter": "http://twitter.com/deny_desu_",
		"github": "http://github.com/dendense",
		"instagram": "http://instagram.com/deny_desu",
		"trakteer": "https://trakteer.id/dendense-project"
	},

	"limitShow": 4,
	"showcases": [
		{
			"id": 1,
			"title": "Profile Generator",
			"siteUrl": "https://github.com/dendense/profile-generator",
			"imageUrl": "https://cdn.pixabay.com/photo/2022/04/13/01/44/plum-blossoms-7129237_1280.jpg"
		},
		{
			"id": 2,
			"title": "Boilerplate CMS",
			"siteUrl": "https://github.com/dendense/Boilerplate-NetlifyCMS",
			"imageUrl": "https://cdn.pixabay.com/photo/2022/04/13/01/44/plum-blossoms-7129237_1280.jpg"
		},
	],
	}
}
```

### Showcase Posts

You can add another posts with adding more line in showcases scope, we recommend to use [ImageBB](https://imgbb.com/upload) to host you pictures

## Progress 90%
