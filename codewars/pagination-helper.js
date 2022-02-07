function PaginationHelper(collection, itemsPerPage) {
	return {
		collection: collection,
		itemsPerPage: itemsPerPage,
		pageCount: function () {
			return Math.ceil(this.collection.length / this.itemsPerPage);
		},
		itemCount: function () {
			return this.collection.length;
		},
		pageItemCount: function (page) {
			if (page < this.pageCount() - 1) {
				return itemsPerPage;
			} else if (page === this.pageCount() - 1) {
				return this.collection.length % this.itemsPerPage;
			} else {
				return -1;
			}
		},
		pageIndex: function (itemIndex) {
			if (itemIndex >= 0 && itemIndex < this.collection.length) {
				return Math.floor(itemIndex / this.itemsPerPage);
			} else {
				return -1;
			}
		}
	}
}